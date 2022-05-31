oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g asana-cli
$ ac COMMAND
running command...
$ ac (--version)
asana-cli/0.0.0 darwin-x64 node-v18.0.0
$ ac --help [COMMAND]
USAGE
  $ ac COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ac hello PERSON`](#ac-hello-person)
* [`ac hello world`](#ac-hello-world)
* [`ac help [COMMAND]`](#ac-help-command)
* [`ac plugins`](#ac-plugins)
* [`ac plugins:install PLUGIN...`](#ac-pluginsinstall-plugin)
* [`ac plugins:inspect PLUGIN...`](#ac-pluginsinspect-plugin)
* [`ac plugins:install PLUGIN...`](#ac-pluginsinstall-plugin-1)
* [`ac plugins:link PLUGIN`](#ac-pluginslink-plugin)
* [`ac plugins:uninstall PLUGIN...`](#ac-pluginsuninstall-plugin)
* [`ac plugins:uninstall PLUGIN...`](#ac-pluginsuninstall-plugin-1)
* [`ac plugins:uninstall PLUGIN...`](#ac-pluginsuninstall-plugin-2)
* [`ac plugins update`](#ac-plugins-update)

## `ac hello PERSON`

Say hello

```
USAGE
  $ ac hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/idkshite/asana-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ac hello world`

Say hello world

```
USAGE
  $ ac hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ac help [COMMAND]`

Display help for ac.

```
USAGE
  $ ac help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ac.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `ac plugins`

List installed plugins.

```
USAGE
  $ ac plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ac plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `ac plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ac plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ac plugins add

EXAMPLES
  $ ac plugins:install myplugin 

  $ ac plugins:install https://github.com/someuser/someplugin

  $ ac plugins:install someuser/someplugin
```

## `ac plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ac plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ac plugins:inspect myplugin
```

## `ac plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ac plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ac plugins add

EXAMPLES
  $ ac plugins:install myplugin 

  $ ac plugins:install https://github.com/someuser/someplugin

  $ ac plugins:install someuser/someplugin
```

## `ac plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ac plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ac plugins:link myplugin
```

## `ac plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ac plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ac plugins unlink
  $ ac plugins remove
```

## `ac plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ac plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ac plugins unlink
  $ ac plugins remove
```

## `ac plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ac plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ac plugins unlink
  $ ac plugins remove
```

## `ac plugins update`

Update installed plugins.

```
USAGE
  $ ac plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
