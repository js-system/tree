## INSTALLATION

**With npm:**

```typescript
npm install --save @js-system/tree
```

## EXAMPLES

```typescript
import { TreeNode } from "@js-system/tree";

const tree = TreeNode.treeFromList(
  [
    {
      id: "child1",
      parentKey: "parent",
    },
    {
      id: "parent",
      parentKey: "root",
    },
    {
      id: "child2",
      parentKey: "parent",
    },
    {
      id: "root",
      parentKey: null,
    },
  ],
  (x) => x.id,
  (x) => x.parentKey,
);
```

```typescript
import { TreeNode } from "@js-system/tree";

const tree = TreeNode.parseTree([
  {
    key: "root",
    children: [
      {
        key: "parent",
        children: [
          {
            key: "child1",
          },
          {
            key: "child2",
          },
        ],
      },
    ],
  },
]);
```

```typescript
import { TreeNode } from "@js-system/tree";

const root = new TreeNode("root");
const parent = new TreeNode("parent");
const child1 = new TreeNode("child1");
const child2 = new TreeNode("child2");

root.addChildNode(parent);
parent.addChildNode(child1);
parent.addChildNode(child2);
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
