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


def cat(args):
    """concatenate files and print on the standard output"""
    if len(args) < 1:
        Usage.usage(tool='cat', error="Include file name(s) to concatenate")
        return
    for filename in args:
        with open(filename) as file:
            content = file.read()
            print(content, end='')


def tac(args):
    """concatenate and print files in reverse"""
    if len(args) < 1:
        Usage.usage(tool='tac', error="Include file name(s) to concatenate")
        return
    for filename in args:
        with open(filename) as file:
            in_order = file.readlines()
            for lines in reversed(in_order):
                print(lines, end='')


def nl(args):
    """number lines of files"""
    if len(args) < 1:
        Usage.usage(tool='nl', error="Include file name(s) to concatenate and number")
        return
    include_blank_lines = False
    if args[0] == '-ba':
        include_blank_lines = True
        args = args[1:]
    content = ''
    index = 1
    for filename in args:
        with open(filename) as file:
            for line in file:
                if not include_blank_lines and line.strip() == '':
                    content += f"\n"
                    continue
                content += f"{index} {line}"
                index += 1
    print(content)
