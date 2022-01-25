AFRAME.registerComponent("wire-fence",{
    init:function(){
        // starting x and y points
        posx = -20
        posz = 80

        for(var i = 0;i<10;i++){
            // creating wired fence
            var wf1=document.createElement("a-entity")
            var wf2=document.createElement("a-entity")
            var wf3=document.createElement("a-entity")
            var wf4=document.createElement("a-entity")

            // set x,y,z position
            posx=pox+5
            posy=3
            posz=posz-10

            //scale
            var scale={x:2,y:2,z:2}
            
            // set id
            wf1.setAttribute("id","wf1"+i)
            wf2.setAttribute("id","wf2"+i)
            wf3.setAttribute("id","wf3"+i)
            wf4.setAttribute("id","wf4"+i)

            // setting position
            wf1.setAttribute("position",{x:posx,y:posy,posz:posz})
            wf2.setAttribute("position",{x:posx,y:posy,posz:posz})
            wf3.setAttribute("position",{x:posx,y:posy,posz:posz})
            wf4.setAttribute("position",{x:posx,y:posy,posz:posz})

            // setting scale
            wf1.setAttribute("scale",scale)
            wf2.setAttribute("scale",scale)
            wf3.setAttribute("scale",scale)
            wf4.setAttribute("scale",scale)

            // setting rotation
            wf1.setAttribute("rotation",{x:0,y:0,z:0})
            wf2.setAttribute("rotation",{x:0,y:0,z:0})
            wf3.setAttribute("rotation",{x:0,y:0,z:0})
            wf4.setAttribute("rotation",{x:0,y:0,z:0})

            //  setting static body
            wf1.setAttribute("static-body",{})
            wf2.setAttribute("static-body",{})
            wf3.setAttribute("static-body",{})
            wf4.setAttribute("static-body",{})

            // gltf-model

            wf1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
            wf2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
            wf3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
            wf4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")


            var scene = document.querySelector("#scene")
            scene.appendChild(wf1)
            scene.appendChild(wf2)
            scene.appendChild(wf3)
            scene.appendChild(wf4)
            console.log(wf1)
        }


    },
}) 