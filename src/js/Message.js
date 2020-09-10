// class Message{
//     constructor({type='sucess',text=''}){
//         this.type = type
//         this.text = text
//         this.bind()
//         this.render()
//     }

//     bind(){
//         setTimeout(()=>{this.show()}) 
//         setTimeout(()=>{this.hide()},1500) 
//     }

//     render(){
//         let $div = document.createElement('div')
//         this.$message = $div
//         $div.classList.add('message')
//         $div.classList.add(this.type)
//         let $icon = document.createElement('span')
//         $div.appendChild($icon)
//         $icon.classList.add('icon'+ this.type)
//         let $text = document.createTextNode(this.text)
//         $div.appendChild($text)
//         document.body.appendChild($div)
//     }

//     show(){
//         this.$message.classList.add('show')
//     }

//     hide(){
//         this.$message.classList.remove('show')
//         setTimeout(() => {
//             this.$message.parentNode.removeChild(this.$message)
//         }, 1500); 
//     }

// }

// document.querySelector('#btn-success').onclick = function(){
//         new Message({text:'我是文字'})
// }

// document.querySelector('#btn-waring').onclick = function(){
//     new Message({text:'我是警告',type:'waring'})
// }

// document.querySelector('#btn-info').onclick = function(){
//     new Message({text:'我是普通消息',type:'info'})
// }

// document.querySelector('#btn-danger').onclick = function(){
//     new Message({text:'我是危险',type:'danger'})
// }



class Message {
    constructor({type='sucess',text=''}){
        this.type = type
        this.text = text

        this.bind()
        this.render()
    }

    bind(){
       setTimeout(() => {this.show()}); 
       setTimeout(() => {this.destory()}, 1500); 
    }

    render(){
        let $div = document.createElement('div')
        this.$message = $div
        $div.classList.add('message')
        $div.classList.add(this.type)
        let $icon = document.createElement('span')
        $icon.classList.add('icon'+ this.type)
        $div.appendChild($icon)
        let $text = document.createTextNode(this.text)
        $div.appendChild($text)
        document.body.appendChild($div)
    }

    show(){
        this.$message.classList.add('show')
    }

    destory(){
        this.$message.classList.remove('show')
        setTimeout(() => {
            this.$message.parentNode.removeChild(this.$message)
        }, 1500);
    }
}

document.querySelector('#btn-success').onclick = function(){
    new Message({text:'我是成功'})
}

document.querySelector('#btn-waring').onclick = function(){
    new Message({text:'我是警告',type:'waring'})
}

document.querySelector('#btn-info').onclick = function(){
    new Message({text:'我是消息',type:'info'})
}

document.querySelector('#btn-danger').onclick = function(){
    new Message({text:'我是危险',type:'danger'})
}