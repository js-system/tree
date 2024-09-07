## INSTALLATION

**With npm:**

```typescript
npm install --save @js-system/timespan
```

## SAMPLES

```typescript
import { TimeSpan } from '@js-system/timespan';

let time1 = TimeSpan.parse("01:00:00");
let time2 = TimeSpan.parse("02:00:00");

expect(time2 > time1).toBeTruthy();
expect(time1.hours).toBe(1);
expect(time2.hours).toBe(2);

let time3 = TimeSpan.parse("00:00:05");
expect(time3.hours).toBe(0);
expect(time3.minutes).toBe(0);
expect(time3.seconds).toBe(5);
```

## CONTRIBUTING

We'd love for you to contribute to our source code! We just ask to:

- Write tests for the new feature or bug fix that you are solving
- Ensure all tests pass before send the pull-request (Use: `npm test`)
- Pull requests will not be merged if:
  - has not unit tests
  - reduce the code coverage
  - not passing in the `npm test` task

## LICENSE

Copyright (c) 2024 Lucas Dornelas

Licensed under the MIT license.
