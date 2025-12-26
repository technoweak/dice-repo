# dice-repo

A small, focused dice-rolling toolkit for tabletop games, simulations, testing, and quick prototyping. dice-repo provides a simple CLI and a lightweight library interface to parse common dice notation (e.g. `3d6+2`, `1d20-1`, `4dF`, etc.), roll dice, and compute results programmatically.

> NOTE: This README is a general guide. Adjust installation and usage commands below to match the actual package manager / entry points in this repository (npm, pip, binary, etc.).

## Features

- Parse standard dice notation: `NdM` (e.g. `3d6`), modifiers (`+`, `-`), advantage/disadvantage patterns, exploding dice, and fate/percentile variants (configurable).
- Command-line utility to quickly roll dice from your terminal.
- Library API for embedding dice logic into games, bots, or tests.
- Deterministic mode using seeds for reproducible rolls (useful for testing).
- Lightweight, no heavy dependencies.

## Quick examples

CLI (example)
```bash
# Roll three six-sided dice and add 2
dice roll 3d6+2

# Roll a d20 with advantage (example CLI flag)
dice roll 1d20 --advantage

# Seeded (deterministic) roll
dice roll 4d6 -s 42
```

JavaScript (library) example
```js
// Example using a CommonJS import (adjust to your module system)
const { roll, parseNotation, setSeed } = require('dice-repo');

// Optional: set seed for deterministic results
setSeed(42);

const notation = '3d6+2';
const result = roll(notation);
// result = { total: 14, rolls: [4,5,3], modifier: 2, detail: '3d6+2 -> 4 + 5 + 3 + 2' }
console.log(result);
```

Python (library) example (if this repo exposes a Python interface)
```py
from dice_repo import roll, set_seed

set_seed(42)
out = roll("1d20+3")
print(out)  # { "total": 17, "rolls": [14], "modifier": 3, ... }
```

API reference (conceptual)
- parseNotation(notation: string) -> ParsedNotation
- roll(notation: string, options?: RollOptions) -> RollResult
- setSeed(seed: number|string) -> void

Adjust actual exported function names to match implementation.

## Installation

Clone the repository:
```bash
git clone https://github.com/technoweak/dice-repo.git
cd dice-repo
```

Install (examples — choose one that fits the project)

Node / npm
```bash
npm install
npm run build    # if there's a build step
npm link         # optional: link globally to use `dice` CLI
```

Python / pip
```bash
pip install .
```

Or use directly as a local library by importing from the repository path.

## Usage

CLI
- Basic: `dice roll 2d6`
- With modifier: `dice roll 1d20+5`
- Repeats: `dice roll 3d6 --repeat 5` (roll 5 times)
- Seed: `dice roll 4d6 -s 1234`

Library
- Call `roll(notation)` to get a result object with a `total` and full breakdown.
- Use `parseNotation` if you need to validate or inspect the parsed structure before rolling.
- Provide options for exploding dice, rerolls, advantage/disadvantage, or fate dice as supported by the implementation.

Examples and expected output:
```text
$ dice roll 3d6+2
Result: 12 (rolls: 3, 4, 3 | modifier: +2)

$ dice roll 1d20 --advantage
Result: 18 (rolls: 12, 18 -> take 18)
```

## Configuration

If the project supports a config file or environment variables, list and explain them here. Example:

- DICE_SEED - default seed for deterministic rolls
- DICE_VERBOSE - show individual dice in CLI output
- DICE_MAX_SIDES - limit maximum allowed die sides for safety

## Tests

Run the test suite (example commands)
```bash
npm test
# or
pytest
```

Include tests for:
- Notation parsing
- Deterministic rolls using seeds
- Edge cases (0 dice, negative modifiers, very large counts)
- Performance and rate-limiting if used in bots

## Contributing

Contributions are welcome!

- Open an issue to propose features or report bugs.
- Fork the repository and create a feature branch.
- Follow the existing code style and add tests for new behavior.
- Submit a pull request with a clear description of changes.

Please add clear examples and update the README/CHANGELOG where appropriate.

## Roadmap / Ideas

- Extend notation support (keep/drop low-priority features behind flags)
- Add a web/GUI for rolling and building complex expressions
- Integrations for popular chatbot frameworks (Discord, Slack)
- Performance improvements for bulk simulated rolls

## License

This repository is provided under the MIT License — see LICENSE file for details.

## Contact

Repo: [technoweak/dice-repo](https://github.com/technoweak/dice-repo)  
Author / maintainer: technoweak

If you'd like a customized README that matches the exact code and CLI entry points in this repository, I can update the README to reflect actual filenames, commands, and API signatures — just tell me whether the project is a Node package, Python package, binary, or multi-language repo and share any existing usage examples or main files (e.g., `bin/dice`, `src/index.js`, `dice/__init__.py`).
