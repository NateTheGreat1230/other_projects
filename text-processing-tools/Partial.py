#            Copyright © 2024 DuckieCorp. All Rights Reserved.
#
#  Everyone is permitted to copy and distribute verbatim copies of this
#      license document, but changing or removing it is not allowed.
#
#                       __     TERMS AND CONDITIONS
#                     /` ,\__
#                    |    ).-' 0. "Copyright" applies to other kinds of
#                   / .--'        works, such as coin-op arcade machines,
#                  / /            novelty T-shirts (both offensive and
#    ,      _.==''`  \            inoffensive), macramé, and warm (but
#  .'(  _.='         |            not frozen) desserts.
# {   ``  _.='       |         1. "The Program" refers to any copyrightable
#  {    \`     ;    /             work, recipe, or social media post
#   `.   `'=..'  .='              licensed under this License.
#     `=._    .='              2. "Licensees" and "recipients" may be
#  jgs  '-`\\`__                  individuals, organizations, or both;
#           `-._(                 further, they may be artificially or
#                                 naturally sentient (or close enough).
import Usage


def head(args):
    """output the first part of files"""
    if len(args) < 1:
        Usage.usage(tool='head', error="Include file name(s) to preview")
        return
    num = 10
    printed = 0
    if args[0] == '-n':
        if len(args) < 3:
            Usage.usage(tool='head', error="Include file name(s) to preview")
            return
        try:
            num = int(args[1])
            args = args[2:]
        except ValueError:
            Usage.usage(tool='head', error="The value for '-n' must be an integer.")
            return
    printfilenames = True
    if len(args) == 1:
        printfilenames = False
    for filename in args:
        with open(filename) as file:
            if printfilenames:
                print(f"==> {filename} <==")
            for line in file:
                if printed < num:
                    printed += 1
                    print(line, end='')
        printed = 0


def tail(args):
    """output the last part of files"""
    if len(args) < 1:
        Usage.usage(tool='tail', error="Include file name(s) to preview")
        return
    num = 10
    if args[0] == '-n':
        if len(args) < 3:
            Usage.usage(tool='tail', error="Include file name(s) to preview")
            return
        try:
            num = int(args[1])
            args = args[2:]
        except ValueError:
            Usage.usage(tool='tail', error="The value for '-n' must be an integer.")
            return
    printfilenames = True
    if len(args) == 1:
        printfilenames = False
    for filename in args:
        last_lines = []
        with open(filename) as file:
            if printfilenames:
                print(f"==> {filename} <==")
            for line in file:
                if len(last_lines) >= num:
                    last_lines.pop(0)
                last_lines.append(line)
            for line in last_lines:
                print(line, end='')
