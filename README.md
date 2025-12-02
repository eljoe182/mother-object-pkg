# mother-object-pkg

Tool for generating test data using the **Mother Object** pattern in TypeScript/JavaScript.

## What is this package?

`@eljoe182/mother-object-pkg` is a small library designed for **testing**.  
Its goal is to facilitate the creation of readable and reusable test data through the **Mother Object** pattern:

- **Mother Object**: an object (or module) whose sole purpose is to **build coherent test values**.
- Separates data creation logic from the test itself.
- Makes tests **more declarative**, easier to read and maintain.

This package wraps the `chance` library and exposes various *Mothers* for primitive types and common helpers.

## Installation

With **npm**:

```bash
npm install @eljoe182/mother-object-pkg
```

With **bun**:

```bash
bun add @eljoe182/mother-object-pkg
```

## Main API

The package entrypoint exports:

- `Mother` (core)
- Primitives:
  - `StringMother`
  - `TextMother`
  - `BooleanMother`
  - `IntegerMother`
  - `FloatMother`
  - `DateMother`
  - `EmailMother`
  - `UrlMother`
  - `PhoneMother`
  - `JwtMother`
  - `RutMother`
- Helpers:
  - `createJwt`
  - `validateJwt`
  - `formatRut`
  - `validateRut`

> Note: specific names may grow over time, but the idea is that all *Mothers* are exported from the main index.

## Basic usage of the Mother Object pattern

Each `XxxMother` exposes, at minimum, a method:

- `random(...)`: generates a random value of the corresponding type.

Generic example in TypeScript:

```ts
import { StringMother } from '@eljoe182/mother-object-pkg';

describe('MyFeature', () => {
  it('should create a user with a random name', () => {
    const name = StringMother.random();

    const user = { id: '1', name };

    expect(user.name).toHaveLength(name.length);
  });
});
```

## Examples by type

### Strings and text

```ts
import { StringMother, TextMother } from '@eljoe182/mother-object-pkg';

// Configurable short string
const upperToken = StringMother.random({
  length: 12,
  casing: 'upper',
  alpha: true,
  numeric: true,
  symbols: false,
});

// Paragraph/lorem ipsum type text
const description = TextMother.random();
```

### Numbers

```ts
import { IntegerMother, FloatMother } from '@eljoe182/mother-object-pkg';

// Integer within a range
const age = IntegerMother.random({ min: 18, max: 99 });

// Float for amounts, percentages, etc.
const price = FloatMother.random({ min: 0, max: 9999, fixed: 2 });
```

### Booleans and dates

```ts
import { BooleanMother, DateMother } from '@eljoe182/mother-object-pkg';

const isActive = BooleanMother.random();
const createdAt = DateMother.random(); // Random Date
```

### Emails, URLs and phones

```ts
import { EmailMother, UrlMother, PhoneMother } from '@eljoe182/mother-object-pkg';

const email = EmailMother.random();
const website = UrlMother.random();
const phone = PhoneMother.random();
```

### JWT (JSON Web Tokens)

```ts
import { JwtMother } from '@eljoe182/mother-object-pkg';

// Random token (for example, for auth middleware tests)
const token = JwtMother.random({
  payload: { sub: 'user-id-123', role: 'admin' },
  secret: 'my-super-secret',
  options: { expiresIn: '1h' },
});
```

### RUT (Chile)

```ts
import { RutMother } from '@eljoe182/mother-object-pkg';

const rut = RutMother.random(); // Returns a valid RUT in string format
```

## Usage in tests (Jest)

Complete example using several *Mothers*:

```ts
import {
  StringMother,
  EmailMother,
  IntegerMother,
  BooleanMother,
} from '@eljoe182/mother-object-pkg';

describe('User domain model', () => {
  it('creates a valid user with random data', () => {
    const user = {
      id: StringMother.random({ length: 10, alpha: true, numeric: true, symbols: false, casing: 'lower' }),
      name: StringMother.random(),
      email: EmailMother.random(),
      age: IntegerMother.random({ min: 18, max: 60 }),
      isActive: BooleanMother.random(),
    };

    expect(user.id).toBeDefined();
    expect(user.email).toContain('@');
    expect(user.age).toBeGreaterThanOrEqual(18);
  });
});
```

## Direct usage of `Mother`

If you need something that doesn't have a specific `XxxMother` yet, you can always use `Mother.create()` directly to access the `Chance` instance:

```ts
import { Mother } from '@eljoe182/mother-object-pkg';

const chance = Mother.create();

const randomCity = chance.city();
const randomIban = chance.iban();
```

This allows you to extend your own *Mothers* in your project without depending on the library having them all.

## Usage recommendations

- Use `XxxMother.random()` in all your tests instead of "hardcoded" values when the value is not relevant to the logic.
- Create domain-specific *Mothers* on top of these primitives if you need richer structures (for example, `UserMother`, `OrderMother`, etc.).
- Avoid coupling your tests to specific values; let the *Mothers* generate data and validate only what's really important.

## Development and contribution

- Source code is in `src/` and compiles to `dist/`.
- To develop locally:

```bash
npm install
npm run lint
npm run test:unit
npm run build
```

Pull Requests and improvements for new *Mothers* are welcome.