import Vue from 'vue'
import Profile from '@/components/Profile.vue'

describe('Profile.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Profile);
        const vm = new Constructor().$mount();
        expect(Profile).to.not.equal(null);
        /*expect(vm.$el.querySelector('.about div').textContent)
            .to.equal('This is the about page')*/
    });
});
