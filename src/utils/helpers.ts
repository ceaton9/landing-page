/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { join, split, toLower } from 'lodash'

export const toHTMLHypen = (word: string) =>
  toLower(join(split(word, ' '), '-'))
