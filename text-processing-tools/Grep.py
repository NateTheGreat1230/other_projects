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


def grep(args):
    """print lines that match patterns"""
    if len(args) < 2:
        Usage.usage(tool='grep', error="Include a pattern and at least one file name")
        return
    reverse = False
    if args[0] == '-v':
        reverse = True
        args = args[1:]
    pattern = args[0]
    args = args[1:]
    printfilenames = True
    if len(args) == 1:
        printfilenames = False
    for filename in args:
        with open(filename) as file:
            for line in file:
                if not reverse:
                    if pattern in line:
                        if printfilenames:
                            print(f"{filename}:{line}", end='')
                        else:
                            print(line, end='')
                else:
                    if pattern not in line:
                        if printfilenames:
                            print(f"{filename}:{line}", end='')
                        else:
                            print(line, end='')
