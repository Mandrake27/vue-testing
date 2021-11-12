import { mount } from '@vue/test-utils';
import Message from '@/components/Message';

describe('Message.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'Hello!';
        const wrapper = mount(Message, {
            props: { msg },
        });

        expect(wrapper.text()).toMatch(msg);
    });
});
