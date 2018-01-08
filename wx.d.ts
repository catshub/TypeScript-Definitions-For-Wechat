/**
 * wecaht type definitions
 */

/* namespace wx */
declare namespace wx {
  function request(object: {
    url: string,
    data?: object | string | ArrayBuffer,
    header?: object,
    method?: Method,
    dataType?: string,
    responseType?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): RequestTask

  function uploadFile(object: {
    url: string,
    filePath: string,
    name: string,
    header?: object,
    formData?: object,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): UploadTask

  function downLoadFile(object: {
    url?: string,
    header?: object,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): DownloadTask

  /**
   * WebSocket
   */
  function connectSocket(object: {
    url: string,
    header?: object,
    method?: string,
    protocols?: String[],
    success?: Function,
    fail?: Function,
    complete?: Function
  }): SocketTask

  function onSocketOpen(callback: Function): void
  function onSocketError(callback: Function): void

  function sendSocketMessage(object: {
    data?: String | ArrayBuffer
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  function onSocketMessage(callback: Function): void
  function closeSocket(object: {
    code?: number,
    reason?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  function onSocketClose(callback: Function): SocketTask

  /**
   * 媒体
   */
  // 图片
  function chooseImage(object: {
    count?: number,
    sizeType?: string[],
    sourceType?: string[],
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function previewImage(object: {
    count?: number,
    urls: string[],
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getImageInfo(object: {
    src: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function saveImageToPhotoAlbum(object: {
    filePath: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 录音
  function startRecord(object: { // 1.6 后不再维护 ， 建议使用 wx.getRecorderManager
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopRecord(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 录音管理
  function getRecorderManager(): RecordManager

  // 音频播放控制  注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
  function playVoice(object: {
    filePath: string,
    duration?: number,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function pauseVoice(): void
  function stopVoice(): void

  // 音乐播放控制   1.2.0 版本开始，本接口不再维护。建议使用能力更强的 wx.getBackgroundAudioManager 接口
  function getBackgroundAudioPlayerState(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function playBackgroundAudio(object: {
    dataUrl: string,
    title?: string,
    coverImgUrl?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function pauseBackgroundAudio(): void
  function seekBackgroundAudio(object: {
    position: number,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopBackgroundAudio(): void
  function onBackgroundAudioPlay(callback: Function): void
  function onBackgroundAudioPause(callback: Function): void
  function onBackgroundAudioStop(callback: Function): void

  // 背景音频播放管理
  function getBackgroundAudioManager(): BackgroundAudioManager

  // 音频组件控制
  function createAudioContext(audioId: string, that?: object): AudioContext
  function createInnerAudioContext(): InnerAudioContext // wx.createAudioContext 升级版。

  // 视频
  function chosseVideo(object: {
    sourceType?: string[],
    compressed?: boolean,
    maxDuration?: number,
    camera?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function saveVideoToPhotosAlbum(object: {
    filePath: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 视频组件控制
  function createVideoContext(videoId: string, that?: object): VideoContext

  // 相机组件控制
  function createCameraContext(that?: object): CameraContext

  // 实时音视频
  function createLivePlayerContext(domId: string, that?: object): LivePlayerContext
  function createLivePusherContext(that?: object): LivePusherContext

  /**
   * 文件
   */
  function saveFile(object: {
    tempFilePath: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getFileInfo(object: {
    filePath: string,
    digestAlgorithm?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  })
  function getSavedFileList(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getSavedFileInfo(object: {
    filePath: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function removeSavedFile(object: {
    filePath: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function openDocument(object: {
    filePath: string,
    fileTyp?: string
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  /**
   * 数据缓存
   */
  function setStorage(object: {
    key: string,
    data: object | string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function setStorageSync(key: string, data: object | string): void
  function getStorage(object: {
    key: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getStorageSync(key: string): object | string
  function getStorageInfo(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getStorageInfoSync(): {
    keys: string[],
    currentSize: number,
    limitSize: number
  }
  function removeStorage(object: {
    key: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function removeStorageSync(key: string): void
  function clearStorage(): void
  function clearStorageSync(): void

  /**
   * 位置
   */
  // 获取位置
  function getLocation(object: {
    type?: string,
    altitude?: boolean,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function chooseLocation(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  // 查看位置
  function openLocation(object: {
    latitude: number,
    longitude: number,
    scale?: number,
    name?: string,
    address?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  // 地图组件控制
  function createMapContext(mapId, that?: object): MapContext

  /**
   * device
   */
  // 系统信息
  function getSystemInfo(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getSystemInfoSync(): SystemInfo
  function canIUse(param: string): boolean

  // 网络状态
  function getNetworkType(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onNetworkStatusChange(callback: Function): void

  // 加速度计
  function onAccelerometerChange(callback: Function): void
  function startAccelerometer(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopAccelerometer(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 罗盘
  function onCompassChange(callback: Function): void
  function startCompass(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopCompass(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 拨打电话
  function makePhoneCall(object: {
    phoneNumber: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 扫码
  function scanCode(object: {
    onlyFromCamera?: boolean,
    scanType?: string[],
    success?: Function,
    fail?: Function,
    complete?: Function
  })

  // 剪贴板
  function setClipboardData(object: {
    data: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getClipboardData(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 蓝牙
  function openBluetoothAdapter(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function closeBluetoothAdapter(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getBluetoothAdapterState(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onBluetoothAdapterStateChange(callback: Function): void
  function startBluetoothDevicesDiscovery(object: {
    services?: string[],
    allowDuplicatesKey?: boolean,
    interval?: number,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopBluetoothDevicesDiscovery(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getBluetoothDevices(object: {
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getConnectedBluetoothDevices(object: {
    services: string[],
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onBluetoothDeviceFound(callback: Function): void
  function createBLEConnection(object: {
    deviceId: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function closeBLEConnection(object: {
    deviceId: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getBLEDeviceServices(object: {
    deviceId: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getBLEDeviceCharacteristics(object: {
    deviceId: string,
    serviceId: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function readBLECharacteristicValue(object: {
    deviceId: string,
    serviceId: string,
    characteristicld: string,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function writeBLECharacteristicValue(object: {
    deviceId: string,
    serviceId: string,
    characteristicld: string,
    value: ArrayBuffer,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function notifyBLECharacteristicValueChange(object: {
    deviceId: string,
    serviceId: string,
    characteristicld: string,
    state: boolean,
    success: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onBLEConnectionStateChange(callback: Function): void
  function onBLECharacteristicValueChange(callback: Function): void

  // iBeacon
  function startBeaconDiscovery(object: {
    uuids: string[],
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopBeaconDiscovery(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getBeacons(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onBeaconUpdate(callback: Function): void
  function onBeaconServiceChange(callback: Function): void

  // 屏幕亮度
  function setScreenBrightness(object: {
    value: number,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getScreenBrightness(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function setKeepScreenOn(object: {
    keepScreenOn: boolean,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void


  // 用户截屏事件
  function onUserCaptureScreen(callback: Function): void

  // 振动
  function vibrateLong(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function vibrateShort(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // 手机联系人
  function addPhoneContact(object: {
    photoFilePath?: string,
    nickName?: string,
    lastName?: string,
    middleName?: string,
    firstName: string,
    remark?: string,
    mobilePhoneNumber?: string,
    weChatNumber?: string,
    addressCountry?: string,
    addressState?: string,
    addressCity?: string,
    addressStreet?: string,
    addressPostalCode?: string,
    organization?: string,
    title?: string,
    workFaxNumber?: string,
    workPhoneNumber?: string,
    hostNumber?: string,
    email?: string,
    url?: string,
    workAddressCountry?: string,
    workAddressState?: string,
    workAddressCity?: string,
    workAddressStreet?: string,
    workAddressPostalCode?: string,
    homeFaxNumber?: string,
    homePhoneNumber?: string,
    homeAddressCountry?: string,
    homeAddressState?: string,
    homeAddressCity?: string,
    homeAddressStreet?: string,
    homeAddressPostalCode?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // NFC
  function getHCEState(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function startHCE(object: {
    add_list: string[],
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopHCE(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onHCEMessage(callback: Function): void
  function sendHCEMessage(object: {
    data: ArrayBuffer,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // WIFI
  function startWifi(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function stopWifi(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function connectWifi(object: {
    SSID: string,
    BSSID: string,
    password?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function getWifiList(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
  function onGetWifiList(callback: Function): void
  function setWifiList(object: { // IOS only
    wifiList: object[],
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void

  // presetWifiList 
  // onEvaluateWifi

  function getConnectedWifi(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  })
  function onWifiConnected(callback: Function): void

  /**
   * WXML 节点信息
   */
  function createSelectorQuery(): SelectorQuery

  /**
   * 第三方平台
   */
  function getExtConfig(object:{
    success?: Function,
    fail?: Function,
    complete?: Function
  })
  function getExtConfigSync(): object

  /**
   * 调试接口
   */
  function setEnableDebug(object: {
    enableDebug: boolean,
    success?: Function,
    fail?: Function,
    complete?: Function
  })
}
/* namespace wx */

type Method = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'HEAD' | 'DELETE' | 'TRACE' | 'CONNECT';
interface RequestTask {
  abort: Function
}
interface UploadTask {
  onProgressUpdate(callback: Function): void;
  abort: Function;
}
interface DownloadTask {
  onProgressUpdate(callback: Function): void;
  abort: Function;
}
interface SocketTask {
  send(object: {
    data: string | ArrayBuffer,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  close(object: {
    code?: number,
    reason?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  })
  onOpen(callback: Function): void,
  onClose(callback: Function): void,
  onError(callback: Function): void,
  onMessage(callback: Function): void
}
interface RecordManager {
  start(options: StartOptions): void;
  pause: Function;
  resume: Function;
  stop: Function;
  onStart(callback: Function): void;
  onPause(callback: Function): void;
  onStop(callback: Function): void;
  onFrameRecorded(callback: Function): void;
  onError(callback: Function): void;
}
interface StartOptions {
  duration?: number;
  sampleRate?: number;
  numberOfChannels: number;
  encodeBitRate?: number;
  format?: string;
  frameSize?: number;
}
interface BackgroundAudioManager {
  readonly duration: number;
  readonly currentTime: number
  readonly paused: boolean;
  src: string;
  startTime: number;
  readonly buffered: number;
  title: string;
  epname: string;
  singer: string;
  coverImgUrl: string;
  webUrl: string

  play(): void;
  pause(): void;
  stop(): void;
  seek(position: number): void;
  onCanplay(callback: Function): void;
  onPlay(callback: Function): void;
  onPause(callback: Function): void;
  onStop(callback: Function): void;
  onEnded(callback: Function): void;
  onTimeUpdate(callback: Function): void;
  onPrev(callback: Function): void; // IOS only
  onNext(callback: Function): void; // IOS only
  onError(callback: Function): void;
  onWaiting(callback: Function): void;
}
interface AudioContext {
  setSrc(src: string): void;
  play(): void;
  pause(): void;
  seek(position: number): void;
}
interface InnerAudioContext {
  src: string;
  startTime: number;
  autoplay: boolean;
  loop: boolean;
  obeyMuteSwitch: boolean;
  readonly duration: number;
  readonly currentTime: number;
  readonly paused: boolean;
  readonly buffered: number;
  play(): void;
  pause(): void;
  stop(): void;
  seek(position: number): void;
  destroy(): void;
  onCanplay(callback: Function): void;
  onPlay(callback: Function): void;
  onPause(callback: Function): void;
  onStop(callback: Function): void;
  onEnded(callback: Function): void;
  onTimeUpdate(callback: Function): void;
  onError(callback: Function): void;
  onWaiting(callback: Function): void;
  onSeeking(callback: Function): void;
  onSeeked(callback: Function): void;
}
interface VideoContext {
  play(): void;
  pause(): void;
  seek(position: number): void;
  sendDanmu(danmu?: { text: string, color: string }): void;
  playbackRate(rate: number): void;
  requestFullScreen(): void;
  exiteFullScreen(): void;
}
interface CameraContext {
  takePhoto(object: {
    quality?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  shartRecord(object: {
    timeoutCallback?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  stopRecord(object: {
    quality?: string,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
}
interface LivePlayerContext {
  play(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  stop(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  mute(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  requestFullScreen(object: {
    direction?: number,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  exitFullScreen(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
}
interface LivePusherContext {
  start(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  stop(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  pause(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  resume(object: {
    direction?: number,
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  switchCamera(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
}
interface MapContext {
  getCenterLocation(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  moveToLocation(): void;
  translateMarker(object: {
    markerId: number,
    destination: object,
    autoRotate: boolean,
    rotate: number,
    duration?: number,
    animationEnd?: Function,
    fail?: Function
  }): void
  includePoints(object: {
    points: object[],
    padding?: number[]
  }): void;
  getRegion(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void;
  getScale(object: {
    success?: Function,
    fail?: Function,
    complete?: Function
  }): void
}
interface SystemInfo {
  brand: string;
  model: string;
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  language: string;
  version: string;
  system: string;
  platform: string;
  fontSizeSetting: number;
  SDKVersion: string;
}
interface SelectorQuery {
  in(that: object): SelectorQuery;
  select(selector: string): NodesRef;
  selectAll(selector: string): NodesRef;
  selectViewport(): NodesRef;
  exec(callback?: Function): void
}
interface NodesRef {
  boundingClientRect(callback?: Function): SelectorQuery;
  scrollOffset(callback?: Function): SelectorQuery;
  fields(fields: Fields, callback?: Function): SelectorQuery;
}
interface Fields {
  id?: boolean;
  dataset?: boolean;
  rect?: boolean;
  size?: boolean;
  scrollOffset?: boolean;
  properties?: boolean;
}