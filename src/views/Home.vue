<template>
  <div class="home">
    <div id="cesiumContainer" style="width: 100%; height:100%"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
    return {
       log:"118.78",
       lat:"32.07" 
    }
  },

 mounted(){
   Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiODNlNWUwNi00ZjEwLTQ4MzQtYTUxMi02NGJkZTcyMzdmNDAiLCJpZCI6Mjc4OTAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5MDMwOTY4MH0.jG2e1Wou0ERb3ocEuxhGeHbqVadezwAOGM7ue0EcNyM';

   var viewer = new Cesium.Viewer('cesiumContainer',{
    terrainProvider: Cesium.createWorldTerrain({
      // required for water effects
 requestWaterMask : true, 
 // required for terrain lighting
 requestVertexNormals : true 
    }),
     animation: false,  //是否显示动画控件
            animation: false,  //是否显示动画控件
scene3DOnly: true, 
            baseLayerPicker: false, //是否显示图层选择控件
            geocoder: true, //是否显示地名查找控件
            timeline: false, //是否显示时间线控件
            sceneModePicker: true, //是否显示投影方式控件
            navigationHelpButton: false, //是否显示帮助信息控件
            infoBox: true,  //是否显示点击要素之后显示的信息
//               imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
//                 url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
//             })
// imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
//     url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=e378319b5250eff0fdd562f3aa190e62",
//     layer: "img",
//     style: "default",
//     format: "tiles",
//     tileMatrixSetID: "w",
//     credit: new Cesium.Credit('天地图全球影像服务'),
//     subdomains: ['t0', "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
//     maximumLevel: 18,
//     show: true
// })

imageryProvider : new Cesium.UrlTemplateImageryProvider({
    url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=8&scale=8&style=8&x={x}&y={y}&z={z}",
})
// imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
//     url : '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
// })



   });
 
// //加载影像底图
// var layer = new Cesium.WebMapTileServiceImageryProvider({
//   url: "http://t0.tianditu.gov.cn/img_w/wmts?tk=你的Key",
//   layer: "img",
//   style: "default",
//   tileMatrixSetID: "w",
//   format: "tiles",
//   maximumLevel: 18
// });
// viewer.imageryLayers.addImageryProvider(layer);
// //加载影像注记
// var layer1 = new Cesium.WebMapTileServiceImageryProvider({
//   url: "http://t0.tianditu.gov.cn/cia_w/wmts?tk=你的Key",
//   layer: "cia",
//   style: "default",
//   tileMatrixSetID: "w",
//   format: "tiles",
//   maximumLevel: 18
// });
// viewer.imageryLayers.addImageryProvider(layer1);

   setTimeout(()=>{
     viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(118.78, 32.07,50000),
            // orientation : {
            //     heading : Cesium.Math.toRadians(0.0),
            //     pitch : Cesium.Math.toRadians(-25.0),
            //     roll : 0.0
            // }
        });
   },2000)

// var palaceTileset = new Cesium.Cesium3DTileset({
//     url: 'http://127.0.0.1:5500/Batched/BatchedColors/tileset.json'
//  })
//  viewer.scene.primitives.add(palaceTileset);  
   

//  }

//  var entity = viewer.entities.add({ 
//     position : Cesium.Cartesian3.fromDegrees(118.78, 32.07), 
//     model : { uri : './Cesium3DTiles/Batched/BatchedTranslucent/tileset.json' }
// });
// viewer.trackedEntity = entity; // 镜头追踪，将镜头固定在对象上
 }
 
}
</script>
