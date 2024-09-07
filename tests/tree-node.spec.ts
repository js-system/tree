import { TreeNode } from '../src/tree-node';

describe('TreeNode', () => {
  test('Should create simple Tree', () => {
    const root = new TreeNode('root');
    const parent = new TreeNode('parent');
    const child1 = new TreeNode('child1');
    const child2 = new TreeNode('child2');

    root.addChildNode(parent);
    parent.addChildNode(child1);
    parent.addChildNode(child2);

    expect(root.children.length).toBe(1);
    expect(parent.children.length).toBe(2);

    expect(parent.containsChild('child1')).toBe(true);
    expect(parent.containsChild('child2')).toBe(true);
    expect(parent.containsChild('child3')).toBe(false);

    expect(root.containsChild('child1')).toBe(true);
    expect(root.containsChild('child2')).toBe(true);
    expect(root.containsChild('child3')).toBe(false);

    expect(child1.parent).toBe(parent);
    expect(child2.parent).toBe(parent);

    expect(parent.root).toBe(root);
    expect(child1.root).toBe(root);
    expect(child2.root).toBe(root);
  });

  test('Should create simple Tree by static parseTree', () => {
    const tree = TreeNode.parseTree([
      {
        key: 'root',
        children: [
          {
            key: 'parent',
            children: [
              {
                key: 'child1',
              },
              {
                key: 'child2',
              },
            ],
          },
        ],
      },
    ]);

    expect(tree.length).toBe(1);

    const root = tree[0];
    const parent = root.getChildNode('parent')!;
    const child1 = parent.getChildNode('child1')!;
    const child2 = parent.getChildNode('child2')!;

    expect(root.children.length).toBe(1);
    expect(parent.children.length).toBe(2);

    expect(parent.containsChild('child1')).toBe(true);
    expect(parent.containsChild('child2')).toBe(true);
    expect(parent.containsChild('child3')).toBe(false);

    expect(root.containsChild('child1')).toBe(true);
    expect(root.containsChild('child2')).toBe(true);
    expect(root.containsChild('child3')).toBe(false);

    expect(child1.parent).toBe(parent);
    expect(child2.parent).toBe(parent);

    expect(parent.root).toBe(root);
    expect(child1.root).toBe(root);
    expect(child2.root).toBe(root);
  });

  test('Should create simple Tree by static treeFromList', () => {
    const tree = TreeNode.treeFromList(
      [
        {
          id: 'child1',
          parentKey: 'parent',
        },
        {
          id: 'parent',
          parentKey: 'root',
        },
        {
          id: 'child2',
          parentKey: 'parent',
        },
        {
          id: 'root',
          parentKey: null,
        },
      ],
      (x) => x.id,
      (x) => x.parentKey,
    );

    expect(tree.length).toBe(1);

    const root = tree[0];
    const parent = root.getChildNode('parent')!;
    const child1 = parent.getChildNode('child1')!;
    const child2 = parent.getChildNode('child2')!;

    expect(root.children.length).toBe(1);
    expect(parent.children.length).toBe(2);

    expect(parent.containsChild('child1')).toBe(true);
    expect(parent.containsChild('child2')).toBe(true);
    expect(parent.containsChild('child3')).toBe(false);

    expect(root.containsChild('child1')).toBe(true);
    expect(root.containsChild('child2')).toBe(true);
    expect(root.containsChild('child3')).toBe(false);

    expect(child1.parent).toBe(parent);
    expect(child2.parent).toBe(parent);

    expect(parent.root).toBe(root);
    expect(child1.root).toBe(root);
    expect(child2.root).toBe(root);
  });

  test('Should parse TreeNode ToList', () => {
    const tree = TreeNode.treeFromList(
      [
        {
          id: 'child1',
          parentKey: 'parent',
        },
        {
          id: 'parent',
          parentKey: 'root',
        },
        {
          id: 'child2',
          parentKey: 'parent',
        },
        {
          id: 'root',
          parentKey: null,
        },
      ],
      (x) => x.id,
      (x) => x.parentKey,
    );

    const root = tree[0];

    const list = root.toList();

    expect(list.length).toBe(4);
    expect(list[0]).toBe(root);

    for (const node of list.slice(1)) {
      expect(root.containsChild(node.key)).toBeTruthy();
    }
  });
});
