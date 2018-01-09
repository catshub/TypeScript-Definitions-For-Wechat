// just for test, please ignore this

const aaa = wx.getRecorderManager()
aaa.onStop(()=>{})
wx.createAudioContext('sdsd').pause()
wx.createCameraContext({}).stopRecord({})
wx.getStorageInfoSync().currentSize
wx.openLocation({latitude:12.0,longitude:12,scale:132})
wx.addCard({cardList:[{cardId:'',cardExt:''}]})
wx.openCard({cardList:[{cardId:'',code:''}]})
wx.openSetting()
wx.setNavigationBarTitle({title: 'string'})
wx.createCanvasContext('id').createCircularGradient(9,9,9).addColorStop(0,'red')
wx.createCanvasContext('id').getActions('sd');