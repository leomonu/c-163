AFRAME.registerComponent("playermovement",{
    init:function(){
        this.walk()

    },
    walk:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="w" || e.key==="s" || e.key==="a" || e.key==="d"){
                var entity = document.querySelector("#sound2")
                entity.components.sound.playSound()
            }
        })
    }
})