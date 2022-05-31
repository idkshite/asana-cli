import {Command, Flags} from '@oclif/core';
import {Client} from 'asana';
import {DateTime} from 'luxon';

export default class Tasks extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Tasks)

    const ASANA_ACCESS_TOKEN = process.env.ASANA_ACCESS_TOKEN
    const client = Client.create().useAccessToken(ASANA_ACCESS_TOKEN!)

    client.users.me()
      .then(user => {
        const userId = user.gid;
        // The user's "default" workspace is the first one in the list, though
        // any user can have multiple workspaces so you can't always assume this
        // is the one you want to work with.
        const workspaceId = user.workspaces[0].gid;
        return client.tasks.findAll({
          assignee: parseInt(userId),
          workspace: workspaceId,
          completed_since: 'now',
          opt_fields: 'id,name,assignee_status,completed,due_on'
        });
      })
      .then(response => {
        // There may be more pages of data, we could stream or return a promise
        // to request those here - for now, let's just return the first page
        // of items.
        return response.data;
      })
      .filter(task => {
        const hasDueDate = !!task.due_on;
        return hasDueDate;
      })
      .filter((task) => {
        const dueDate = DateTime.fromFormat(task.due_on!, "yyyy-MM-dd");
        return dueDate <= DateTime.now().plus({week: 3}) && !task.completed;
      })
      .then(list => {

        const soon = list.filter((task) => {
          const dueDate = DateTime.fromFormat(task.due_on!, "yyyy-MM-dd");
          return dueDate <= DateTime.now().plus({days: 4}) && dueDate >= DateTime.now().minus({days: 1})
        })

        console.log("### Soon ###");
        soon.forEach((task) => {
          const dueDate = DateTime.fromFormat(task.due_on!, "yyyy-MM-dd");
          console.log(`${task.name} ${Math.ceil(dueDate.diffNow( "days").toObject().days!)}`);
        })

      })
      .catch(e => {
        console.log(e);
      });

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
