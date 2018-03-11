import Vue from 'vue'
import About from '@/components/About.vue'

describe('About.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(About);
        const vm = new Constructor().$mount();
        expect(About).to.not.equal(null);
        /*expect(vm.$el.querySelector('.about div').textContent)
            .to.equal('This is the about page')*/
    });
});



/*describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Welcome to Your Vue.js App')
    })
})*/
