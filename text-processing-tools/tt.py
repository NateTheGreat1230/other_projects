#!/usr/bin/env python

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
import sys
import Concatenate
import CutPaste
import Grep
import Sorting
import WordCount
import Partial
from Usage import usage

for i, arg in enumerate(sys.argv):
    num = f"arg #{i})"


def main():
    if len(sys.argv) < 2:
        usage()
        sys.exit(1)
    else:
        tool = sys.argv[1]
        args = sys.argv[2:]
        tools = {
            "cat": Concatenate.cat,
            "tac": Concatenate.tac,
            "nl": Concatenate.nl,
            "cut": CutPaste.cut,
            "paste": CutPaste.paste,
            "grep": Grep.grep,
            "head": Partial.head,
            "tail": Partial.tail,
            "sort": Sorting.sort,
            "wc": WordCount.wc
        }
        tools[tool](args)


if __name__ == '__main__':
    main()
