if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine)
    var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", Math.PI / 2, 3 * Math.PI / 4, 20, BABYLON.Vector3.Zero(), scene);

    scene.activeCamera.attachControl(canvas)

    var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 0, 10), scene)

    var plane = BABYLON.Mesh.CreatePlane("plane", 10, scene, null)
    var ball = BABYLON.Mesh.CreateSphere("ball", 16, 1, scene)
    var box = BABYLON.Mesh.CreateBox("box", 1, scene)
    var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 4, 2, 2, 32, scene)

    plane.rotation.y = Math.PI

    ball.position.z = 1

    box.position.x = 1
    box.position.y = 2
    box.position.z = 3

    cylinder.rotation.x = Math.PI / 2
    cylinder.position.x = -3
    cylinder.position.y = 3
    cylinder.position.z = 4

    engine.runRenderLoop(function() {
        scene.render();
    });

    window.addEventListener("resize", function(){
        engine.resize()
    })
} else {
    alert("I'm sorry, BabylonJS is not supported on your browser.")
}
