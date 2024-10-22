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


def wc(args):
    """print newline, word, and byte counts for each file"""
    if len(args) < 1:
        Usage.usage(tool='wc', error="Include file name(s) to count words, lines and characters")
        return
    for filename in args:
        words = 0
        lines = 0
        chars = 0
        with open(filename) as file:
            for line in file:
                lines += 1
                chars += len(line)
                words += len(line.split())
        print(f"{lines:>6} {words:>6} {chars:>6} {filename:<50}")
