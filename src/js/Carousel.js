//点击pre展示上一页，展示indicators
//点击next展现下一页，展示indicators
//点击indicators展示第N页，设置indicators
//组件化代码
class Carousel{
    constructor($root){
        this.$root = $root
        this.$pre =$root.querySelector('.arrow-pre')
        this.$next = $root.querySelector('.arrow-next')
        this.$$indicators =$root.querySelectorAll('.indicators > li') 
        this.$$pannels =$root.querySelectorAll('.pannels > a') 
        this.bind()
    }

    bind(){
        this.$pre.onclick =()=>{
            let index = this.getPreIndex()
            this.setPage(index)
            this.setIndicator(index)
        }

        this.$next.onclick = ()=>{
            let  index = this.getNextIndex()
            this.setPage(index)
            this.setIndicator(index)
        }

        this.$$indicators.forEach($indicator=>{
            $indicator.onclick = e => {
                let index = [...$$indicators].indexOf(e.target)
                this.setIndicator(index)
                this.setPage(index)
            }
        })
    }

    getIndex(){
        return [...this.$$indicators].indexOf(this.$root.querySelector('.indicators .active'))
    }

    getPreIndex(){
        return (this.getIndex()-1 + this.$$indicators.length) % this.$$indicators.length
    }

    getNextIndex(){
        return (this.getIndex()+1 ) % this.$$indicators.length
    }

    setPage(index){
        this.$$pannels.forEach($pannel=>$pannel.classList.remove('active'))
        this.$$pannels[index].classList.add('active')
    }

    setIndicator(index){
        this.$$indicators.forEach($indicator=>$indicator.classList.remove('active'))
        this.$$indicators[index].classList.add('active')
    }
}

new Carousel(document.querySelector('.carousel'))


// 意大利面条式实现代码
// const $ = s => document.querySelector(s)
// const $$ = s => document.querySelectorAll(s)
// const $pre = $('.carousel .arrow-pre')
// const $next = $('.carousel .arrow-next')

// const $$indicators = $$('.carousel .indicators > li')
// const $$pannels = $$('.carousel .pannels > a')

// const getIndex = () =>  [...$$indicators].indexOf($('.carousel .indicators .active'))
// const getPreIndex = () => (getIndex()-1 + $$indicators.length) % $$indicators.length
// const getNextIndex = () =>  (getIndex()+1 ) % $$indicators.length

// const setPage = index =>{
//     $$pannels.forEach($pannel=>$pannel.classList.remove('active'))
//     $$pannels[index].classList.add('active')
// }

// const setIndicator = index =>{
//     $$indicators.forEach($indicator=>$indicator.classList.remove('active'))
//     $$indicators[index].classList.add('active')
// }

// $pre.onclick = function(){
//     let index = getPreIndex()
//     setPage(index)
//     setIndicator(index)
// }

// $next.onclick = function(){
//     let  index = getNextIndex()
//     setPage(index)
//     setIndicator(index)
// }

// $$indicators.forEach($indicator=>{
//     $indicator.onclick = function(e){
//         let index = [...$$indicators].indexOf(e.target)
//         setIndicator(index)
//         setPage(index)
//     }
// })



