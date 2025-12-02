# mother-object-pkg

Tool para generar datos de prueba usando el patrón **Mother Object** en TypeScript/JavaScript.

## ¿Qué es este paquete?

`@eljoe182/mother-object-pkg` es una pequeña librería pensada para **testing**.  
Su objetivo es facilitar la creación de datos de prueba legibles y reutilizables mediante el patrón **Mother Object**:

- **Mother Object**: un objeto (o módulo) cuyo único propósito es **construir valores de prueba** coherentes.
- Separa la lógica de creación de datos del propio test.
- Hace que los tests sean **más declarativos**, fáciles de leer y mantener.

Este paquete envuelve la librería `chance` y expone varios *Mothers* para tipos primitivos y helpers comunes.

## Instalación

Con **npm**:

```bash
npm install @eljoe182/mother-object-pkg
```

Con **bun**:

```bash
bun add @eljoe182/mother-object-pkg
```

## API principal

Desde el entrypoint del paquete se exporta:

- `Mother` (core)
- Primitivos:
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

> Nota: los nombres concretos pueden crecer con el tiempo, pero la idea es que todos los *Mothers* se exportan desde el índice principal.

## Uso básico del patrón Mother Object

Cada `XxxMother` expone, como mínimo, un método:

- `random(...)`: genera un valor aleatorio del tipo correspondiente.

Ejemplo genérico en TypeScript:

```ts
import { StringMother } from '@eljoe182/mother-object-pkg';

describe('MiFeature', () => {
  it('debería crear un usuario con nombre aleatorio', () => {
    const name = StringMother.random();

    const user = { id: '1', name };

    expect(user.name).toHaveLength(name.length);
  });
});
```

## Ejemplos por tipo

### Strings y texto

```ts
import { StringMother, TextMother } from '@eljoe182/mother-object-pkg';

// String corto configurable
const upperToken = StringMother.random({
  length: 12,
  casing: 'upper',
  alpha: true,
  numeric: true,
  symbols: false,
});

// Texto tipo párrafo/lorem ipsum
const description = TextMother.random();
```

### Números

```ts
import { IntegerMother, FloatMother } from '@eljoe182/mother-object-pkg';

// Entero entre un rango
const age = IntegerMother.random({ min: 18, max: 99 });

// Float para montos, porcentajes, etc.
const price = FloatMother.random({ min: 0, max: 9999, fixed: 2 });
```

### Booleanos y fechas

```ts
import { BooleanMother, DateMother } from '@eljoe182/mother-object-pkg';

const isActive = BooleanMother.random();
const createdAt = DateMother.random(); // Date aleatoria
```

### Emails, URLs y teléfonos

```ts
import { EmailMother, UrlMother, PhoneMother } from '@eljoe182/mother-object-pkg';

const email = EmailMother.random();
const website = UrlMother.random();
const phone = PhoneMother.random();
```

### JWT (JSON Web Tokens)

```ts
import { JwtMother } from '@eljoe182/mother-object-pkg';

// Token aleatorio (por ejemplo, para pruebas de auth middleware)
const token = JwtMother.random({
  payload: { sub: 'user-id-123', role: 'admin' },
  secret: 'mi-super-secret',
  options: { expiresIn: '1h' },
});
```

### RUT (Chile)

```ts
import { RutMother } from '@eljoe182/mother-object-pkg';

const rut = RutMother.random(); // Devuelve un RUT válido en formato string
```

## Uso en tests (Jest)

Ejemplo completo usando varios *Mothers*:

```ts
import {
  StringMother,
  EmailMother,
  IntegerMother,
  BooleanMother,
} from '@eljoe182/mother-object-pkg';

describe('User domain model', () => {
  it('crea un usuario válido con datos aleatorios', () => {
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

## Uso directo de `Mother`

Si necesitas algo que aún no tenga un `XxxMother` específico, siempre puedes usar directamente `Mother.create()` para acceder a la instancia de `Chance`:

```ts
import { Mother } from '@eljoe182/mother-object-pkg';

const chance = Mother.create();

const randomCity = chance.city();
const randomIban = chance.iban();
```

Esto te permite extender tus propios *Mothers* en tu proyecto sin depender de que la librería los tenga todos.

## Recomendaciones de uso

- Usa `XxxMother.random()` en todos tus tests en lugar de valores “hardcodeados” cuando el valor no sea relevante para la lógica.
- Crea *Mothers* específicos de tu dominio encima de estos primitivos si necesitas estructuras más ricas (por ejemplo, `UserMother`, `OrderMother`, etc.).
- Evita acoplar tus tests a valores concretos; deja que los *Mothers* generen datos y valida solo lo realmente importante.

## Desarrollo y contribución

- El código fuente está en `src/` y se compila a `dist/`.
- Para desarrollar localmente:

```bash
npm install
npm run lint
npm run test:unit
npm run build
```

Pull Requests y mejoras a nuevos *Mothers* son bienvenidas.