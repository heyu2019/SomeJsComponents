class Collapse{
    constructor($container,type=1){
        this.$container = $container
        this.$$items =  $container.querySelectorAll('.item')
        this.type = type
        this.bind()
    }

    bind(){
        let self = this
        this.$$items.forEach($items => {
            $items.onclick = function(){
              if(self.type === 2 ){
                this.classList.toggle('active')
              }else if(self.type === 1){
                self.$$items.forEach($items=>$items.classList.remove('active'))
                this.classList.add('active')
              }
            }
        });
    }
}

new Collapse(document.querySelector('.collapse'))

//分别运行手风琴和折叠面板
// new Collapse(document.querySelectorAll('.collapse')[0])
// new Collapse(document.querySelectorAll('.collapse')[1],2)

//面向过程的手风琴和折叠面板的集合
// $$('.collapse .item').forEach($item=>{
//   $item.onclick = function(){
//     $$('.collapse .item').forEach($item=>$item.classList.remove('active'))
//     this.classList.add('active')
//   }
//   $item.onclick = function(){
//    this.classList.toggle('active')
//   }
// })