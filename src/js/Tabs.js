
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
const $$tabItems = $$('.tabs .tab-item')
const $$tabPannel = $$('.tabs .tab-pannel')
const $$line = $('.tabs .line')
$$line.style.width = $$tabItems[0].offsetWidth + 'px'
$$tabItems.forEach($tab=>{
    $tab.onclick=function(){
        $$tabItems.forEach($tab => $tab.classList.remove('active'))
        this.classList.add('active')
        let index = [...$$tabItems].indexOf(this)
        $$line.style.width = this.offsetWidth + 'px'
        $$line.style.transform = `translateX(${this.offsetLeft}px)`
        $$tabPannel.forEach($pannel=>$pannel.classList.remove('active'))
        $$tabPannel[index].classList.add('active')

    }
})

/**使用面向对象的方式优化Tabs选项卡
 * class Tabs{
    constructor($container){
        this.$container = $container
        this.$$tabItems = $container.querySelectorAll('.tab-item')
        this.$$tabPannel = $container.querySelectorAll('.tab-pannel')
        this.$$line = $container.querySelector('.line')
        this.init()
        this.bind()
    }

    init(){
        this.$$line.style.width = this.$$tabItems[0].offsetWidth+'px'
    }

    bind(){
        let self = this
        self.$$tabItems.forEach($tab=>{
            $tab.onclick=function(){
               self.$$tabItems.forEach($tab => $tab.classList.remove('active'))
                this.classList.add('active')
                let index = [...self.$$tabItems].indexOf(this)
                self.$$line.style.width = this.offsetWidth + 'px'
                self.$$line.style.transform = `translateX(${this.offsetLeft}px)`
                self.$$tabPannel.forEach($pannel=>$pannel.classList.remove('active'))
                self.$$tabPannel[index].classList.add('active')
            }
        })
    }
}
document.querySelectorAll('.tabs').forEach($tab=>new Tabs($tab))
new Tabs(document.querySelectorAll('.tabs')[0])
new Tabs(document.querySelectorAll('.tabs')[1])
 */
