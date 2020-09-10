//点击pre展示上一页，展示indicators
//点击next展现下一页，展示indicators
//点击indicators展示第N页，设置indicators
//使用设计模式优化组件

//动画效果使用不同的动效切换Carousel
const Css = ($node,cssobj) => Object.assign($node.style,cssobj)
const Animation = {
    slid($from,$to,direction){
        //同时切换左右两个页面，设定页面的初始页面为$from,点击到的页面为$to,direction为方向
        $from.style = ''
        $to.style = ''
        console.log('slide',arguments)
        Css($from,{
            transform:`translateX(0)`,
            zIndex:10
        })

        Css($to,{
            transform:`translateX(${direction === 'right' ? '-' : ''}100%)`,
            zIndex:10
        })

        setTimeout(() => {
            Css($from,{
                transform:`translateX(${direction === 'left' ? '-' : ''}100%)`,
                transition: `all .4s`
            })
            Css($to,{
                transform:`translateX(0)`,
                transition: `all .4s`
            })
        });
    },
    fade($from,$to){
        $from.style = ''
        $to.style = ''
        console.log('slide',arguments)
        Css($from,{
            opacity:1,
            zIndex:10
        })

        Css($to,{
            opacity:1,
            zIndex:9
        })

        setTimeout(() => {
            Css($from,{
                opacity:0,
                zIndex:10,
                transition: `all .4s`
            })
            Css($to,{
                opacity:1,
                zIndex:9,
                transition: `all .4s`
            })

            setTimeout(() => {
                Css($from,{
                    zIndex:9,
                })
                Css($to,{
                    zIndex:10,
                })
            }, 400);
        });
    },
    zoom($from,$to){
        $from.style = ''
        $to.style = ''
        console.log('slide',arguments)
        Css($from,{
            transform:`scale(1)`,
            opacity:1,
            zIndex:10
        })

        Css($to,{
            transform:`scale(10)`,
            opacity:1,
            zIndex:9
        })

        setTimeout(() => {
            Css($from,{
                transform:`scale(10)`,
                opacity:0,
                zIndex:10,
                transition: `all .4s`
            })
            Css($to,{
                transform:`scale(1)`,
                opacity:1,
                zIndex:9,
                transition: `all .4s`
            })

            setTimeout(() => {
                Css($from,{
                    zIndex:9,
                })
                Css($to,{
                    zIndex:10,
                })
            }, 400);
        });
    }

}
class Carousel{

    constructor($root,animation){
        this.$root = $root
        this.$pre =$root.querySelector('.arrow-pre')
        this.$next = $root.querySelector('.arrow-next')
        this.$$indicators =$root.querySelectorAll('.indicators > li') 
        this.$$pannels =$root.querySelectorAll('.pannels > a')
        this.animation = animation
        this.bind()
    }

    bind(){
        this.$pre.onclick =()=>{
            let fromindex = this.getIndex() //当前页
            let toindex = this.getPreIndex() //上一页
            this.setPage(fromindex,toindex,'right')
            this.setIndicator(toindex)
        }

        this.$next.onclick = ()=>{
            let fromindex = this.getIndex()
            let toindex = this.getNextIndex()
            this.setPage(fromindex,toindex,'left')
            this.setIndicator(toindex)
        }

        this.$$indicators.forEach($indicator=>{
            $indicator.onclick = e => {
                let fromindex = this.getIndex()
                let toindex = [...this.$$indicators].indexOf(e.target)
                this.setIndicator(toindex)
                let direction = fromindex > toindex ? 'right' : 'left'
                this.setPage(fromindex,toindex,direction)
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

    setPage(fromindex,toindex,direction){
        console.log('setpage',arguments)
        this.animation(this.$$pannels[fromindex],this.$$pannels[toindex],direction)
    }

    setIndicator(index){
        this.$$indicators.forEach($indicator=>$indicator.classList.remove('active'))
        this.$$indicators[index].classList.add('active')
    }

    setAnimation(animation){
        this.animation = animation
    }
}
let dialog = document.querySelector('.carousel')
let carousel = new Carousel(dialog,Animation.slid)


document.querySelector('#animation-select').onchange = function() {
    carousel.setAnimation(Animation[this.value])
  }