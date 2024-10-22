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


def cut(args):
    """remove sections from each line of files"""
    if len(args) < 1:
        Usage.usage(tool='cut', error="Include at least one csv file")
        return
    fields = [1]
    output = []
    if args[0] == '-f':
        if len(args) < 3:
            Usage.usage(tool='cut', error="Include at least one csv file")
            return
        try:
            fields = list(map(int, args[1].split(',')))
            args = args[2:]
        except ValueError:
            Usage.usage(tool='cut', error="The value for '-f' must be integers separated by commas.")
            return
    for filename in args:
        with open(filename) as file:
            for line in file:
                items = line.strip().split(',')
                current = []
                for cols in fields:
                    if not len(items) < (cols - 1):
                        current.append(items[cols - 1])
                    else:
                        current.append('')
                output.append(current)
    for line in output:
        print(','.join(line))


def paste(args):
    """merge lines of files"""
    if len(args) < 1:
        Usage.usage(tool='paste', error="Include at least one file to paste to csv")
        return
    output = []
    files = [open(filename) for filename in args]
    while True:
        current_line = []
        files_empty = True
        for file in files:
            line = file.readline()
            if line != '':
                current_line.append(line.strip())
                files_empty = False
            else:
                current_line.append('')
        if files_empty:
            break
        output.append(current_line)
    for line in output:
        print(','.join(line))
