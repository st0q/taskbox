import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

// Note: Arguments (略して args) を使用することで、
// コントロールアドオンを通して、Storybook を再起動することなく、コンポーネントを動的に編集することができるようになります。
const Template = args => <Task {...args} />;

// Note: Template.bind({}) は関数のコピーを作成する JavaScript の標準的な テクニックで、
// 同じ実装を使いながら、エクスポートされたそれぞれのストーリーに独自のプロパティを設定することができます。
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
