/**
 * wecaht type definitions
 */

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
  function createCameraContext(that: object): CameraContext

  // 实时音视频
  function createLivePlayerContext(domId: string, that: object): LivePlayerContext

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
}

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
  onOpen(callback): void,
  onClose(callback): void,
  onError(callback): void,
  onMessage(callback): void
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
  onCanplay(callback): void;
  onPlay(callback): void;
  onPause(callback): void;
  onStop(callback): void;
  onEnded(callback): void;
  onTimeUpdate(callback): void;
  onPrev(callback): void; // IOS only
  onNext(callback): void; // IOS only
  onError(callback): void;
  onWaiting(callback): void;
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
  onCanplay(callback): void;
  onPlay(callback): void;
  onPause(callback): void;
  onStop(callback): void;
  onEnded(callback): void;
  onTimeUpdate(callback): void;
  onError(callback): void;
  onWaiting(callback): void;
  onSeeking(callback): void;
  onSeeked(callback): void;
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
