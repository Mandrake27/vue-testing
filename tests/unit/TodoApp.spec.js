import { mount } from '@vue/test-utils';
import TodoApp from '@/components/TodoApp';

describe('TodoApp.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TodoApp);
    })

    it('should render todo text', () => {
        const todo = wrapper.get('[data-test="todo"]');

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
        expect(todo.text()).toBe('Learn Vue testing');
    });

    it('should add new todo and clears the input', async () => {
        const newTodo = wrapper.find('[data-test="new-todo"]');

        await wrapper.get('[data-test="new-todo"]').setValue('Learn Vue itself');
        await wrapper.get('[data-test="todo-form"]').trigger('submit');

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
        expect(newTodo.element.value).toBe('')
    });

    it('should complete a todo', async () => {
        const todo = wrapper.find('[data-test="todo"]');
        await wrapper.get('[data-test="todo"]').trigger('click');

        expect(todo.classes()).toContain('completed');
    })
});
