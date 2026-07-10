import { writeFileSync } from 'fs';
import { join } from 'path';

import { buildCssVariablesFile } from './cssVariables';

writeFileSync(join(__dirname, 'variables.css'), buildCssVariablesFile());
console.log('Wrote src/tokens/variables.css');
