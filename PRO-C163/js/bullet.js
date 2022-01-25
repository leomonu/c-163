AFRAME.registerComponent("bullets",{
    init:function(){
        this.showBullet()

    },

    // show bullet
    showBullet:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "c"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.04
                        })
                bullet.setAttribute("material",{
                    color:"#AF9B60"
                })
                // add sound
                this.shootSound()
                // adding bullet with camera position
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")

                bullet.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                // dynamic body
                bullet.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:0,
                    
                })
            //    console.log(bullet)
            
                // cam.appendChild(bullet)

                // get the camera direction as three.js vector
                var direction = new THREE.Vector3()
                var camera = document.querySelector("#camera").object3D
                camera.getWorldDirection(direction)
                // console.log(direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                    
                
            //    appending bullet to scene
            var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
                bullet.addEventListener("collide",this.removeBullet)
                
            }   
        })


    },

    removeBullet:function(e){
    // console.log(e.detail.target.el)
    // console.log(e.detail.body.el)
    // bulletElement
    var bulletElement = e.detail.target.el
    // bodyElement
    var bodyElement  = e.detail.body.el

    if(bodyElement.id.includes("box")){
        bodyElement.setAttribute("material",{
            opacity:1,
            transparent:true
        })
        // intalizing Cannon.js
        var myforce = new CANNON.Vec3(-2,2,1)
        var mybulletpoint = new CANNON.Vec3().copy( bodyElement.getAttribute("position"))

        bodyElement.applyImpulse(myforce,mybulletpoint)
        


        bulletElement.removeEventListener("collide",this.shoot)
        var scene = document.querySelector("#scene")
        scene.removeChild(bulletElement) 
        
        
    }

        

    },
    tick:function(){
        // remove bullet element from scene
        var bulletElement
       
    },
    shootSound:function(){
        var entity = document.querySelector("#sound1")
        entity.components.sound.playSound()
    }


    



})