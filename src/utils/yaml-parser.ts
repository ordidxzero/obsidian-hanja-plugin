import { parseYaml } from 'obsidian';
import { HanjaSpec } from 'src/type';

function parseEventSpec(eventSpec: string): HanjaSpec {
  const parsed = parseYaml(eventSpec);

  return parsed;
}

export default parseEventSpec;
