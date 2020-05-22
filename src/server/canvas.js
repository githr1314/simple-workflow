import { registerNode } from 'topology-core/middles'
import {
  flowData,
  flowDataAnchors,
  flowDataIconRect,
  flowDataTextRect,
  flowSubprocess,
  flowSubprocessIconRect,
  flowSubprocessTextRect,
  flowDb,
  flowDbIconRect,
  flowDbTextRect,
  flowDocument,
  flowDocumentAnchors,
  flowDocumentIconRect,
  flowDocumentTextRect,
  flowInternalStorage,
  flowInternalStorageIconRect,
  flowInternalStorageTextRect,
  flowExternStorage,
  flowExternStorageAnchors,
  flowExternStorageIconRect,
  flowExternStorageTextRect,
  flowQueue,
  flowQueueIconRect,
  flowQueueTextRect,
  flowManually,
  flowManuallyAnchors,
  flowManuallyIconRect,
  flowManuallyTextRect,
  flowDisplay,
  flowDisplayAnchors,
  flowDisplayIconRect,
  flowDisplayTextRect,
  flowParallel,
  flowParallelAnchors,
  flowComment,
  flowCommentAnchors
} from 'topology-flow-diagram'

import {
  activityFinal,
  activityFinalIconRect,
  activityFinalTextRect,
  swimlaneV,
  swimlaneVIconRect,
  swimlaneVTextRect,
  swimlaneH,
  swimlaneHIconRect,
  swimlaneHTextRect,
  fork,
  forkHAnchors,
  forkIconRect,
  forkTextRect,
  forkVAnchors
} from 'topology-activity-diagram'
import {
  simpleClass,
  simpleClassIconRect,
  simpleClassTextRect,
  interfaceClass,
  interfaceClassIconRect,
  interfaceClassTextRect
} from 'topology-class-diagram'
import {
  lifeline,
  lifelineAnchors,
  lifelineIconRect,
  lifelineTextRect,
  sequenceFocus,
  sequenceFocusAnchors,
  sequenceFocusIconRect,
  sequenceFocusTextRect
} from 'topology-sequence-diagram'
// echarts
import {
  register as registerChart
} from 'topology-chart-diagram'
import {
  loadJS
} from "topology-core/utils/dom";

export function canvasRegister() {
  registerNode(
    'flowData',
    flowData,
    flowDataAnchors,
    flowDataIconRect,
    flowDataTextRect
  )
  registerNode(
    'flowSubprocess',
    flowSubprocess,
    null,
    flowSubprocessIconRect,
    flowSubprocessTextRect
  )
  registerNode('flowDb', flowDb, null, flowDbIconRect, flowDbTextRect)
  registerNode(
    'flowDocument',
    flowDocument,
    flowDocumentAnchors,
    flowDocumentIconRect,
    flowDocumentTextRect
  )
  registerNode(
    'flowInternalStorage',
    flowInternalStorage,
    null,
    flowInternalStorageIconRect,
    flowInternalStorageTextRect
  )
  registerNode(
    'flowExternStorage',
    flowExternStorage,
    flowExternStorageAnchors,
    flowExternStorageIconRect,
    flowExternStorageTextRect
  )
  registerNode(
    'flowQueue',
    flowQueue,
    null,
    flowQueueIconRect,
    flowQueueTextRect
  )
  registerNode(
    'flowManually',
    flowManually,
    flowManuallyAnchors,
    flowManuallyIconRect,
    flowManuallyTextRect
  )
  registerNode(
    'flowDisplay',
    flowDisplay,
    flowDisplayAnchors,
    flowDisplayIconRect,
    flowDisplayTextRect
  )
  registerNode('flowParallel', flowParallel, flowParallelAnchors, null, null)
  registerNode('flowComment', flowComment, flowCommentAnchors, null, null)

  // activity
  registerNode(
    'activityFinal',
    activityFinal,
    null,
    activityFinalIconRect,
    activityFinalTextRect
  )
  registerNode(
    'swimlaneV',
    swimlaneV,
    null,
    swimlaneVIconRect,
    swimlaneVTextRect
  )
  registerNode(
    'swimlaneH',
    swimlaneH,
    null,
    swimlaneHIconRect,
    swimlaneHTextRect
  )
  registerNode('forkH', fork, forkHAnchors, forkIconRect, forkTextRect)
  registerNode('forkV', fork, forkVAnchors, forkIconRect, forkTextRect)

  // class
  registerNode(
    'simpleClass',
    simpleClass,
    null,
    simpleClassIconRect,
    simpleClassTextRect
  )
  registerNode(
    'interfaceClass',
    interfaceClass,
    null,
    interfaceClassIconRect,
    interfaceClassTextRect
  )

  // sequence
  registerNode(
    'lifeline',
    lifeline,
    lifelineAnchors,
    lifelineIconRect,
    lifelineTextRect
  )
  registerNode(
    'sequenceFocus',
    sequenceFocus,
    sequenceFocusAnchors,
    sequenceFocusIconRect,
    sequenceFocusTextRect
  )

  // echarts
  if (process.client) { // nuxt需要在客户端才可以注册echarts
    registerChart();
  }
}

export const Tools = [
//   {
//     group: '基本形状',
//     children: [
//       {
//         name: 'rectangle',
//         icon: 'icon-rect',
//         data: {
//           text: 'Topology',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           paddingLeft: 10,
//           paddingRight: 10,
//           paddingTop: 10,
//           paddingBottom: 10,
//           name: 'rectangle',
//           icon: '\ue64d',
//           iconFamily: 'topology',
//           iconColor: '#2f54eb'
//         }
//       },
//       {
//         name: 'rectangle',
//         icon: 'icon-rectangle',
//         data: {
//           text: '圆角矩形',
//           rect: {
//             width: 200,
//             height: 50
//           },
//           paddingLeft: 10,
//           paddingRight: 10,
//           paddingTop: 10,
//           paddingBottom: 10,
//           borderRadius: 0.1,
//           name: 'rectangle'
//         }
//       },
//       {
//         name: 'circle',
//         icon: 'icon-circle',
//         data: {
//           text: '圆',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'circle',
//           textMaxLine: 1
//         }
//       },
//       {
//         name: 'triangle',
//         icon: 'icon-triangle',
//         data: {
//           text: '三角形',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'triangle'
//         }
//       },
//       {
//         name: 'diamond',
//         icon: 'icon-diamond',
//         data: {
//           text: '菱形',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'diamond'
//         }
//       },
//       {
//         name: 'pentagon',
//         icon: 'icon-pentagon',
//         data: {
//           text: '五边形',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'pentagon'
//         }
//       },
//       {
//         name: 'hexagon',
//         icon: 'icon-hexagon',
//         data: {
//           text: '六边形',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           paddingTop: 10,
//           paddingBottom: 10,
//           name: 'hexagon'
//         }
//       },
//       {
//         name: 'pentagram',
//         icon: 'icon-pentagram',
//         data: {
//           text: '五角星',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'pentagram'
//         }
//       },
//       {
//         name: 'leftArrow',
//         icon: 'icon-arrow-left',
//         data: {
//           text: '左箭头',
//           rect: {
//             width: 200,
//             height: 100
//           },
//           name: 'leftArrow'
//         }
//       },
//       {
//         name: 'rightArrow',
//         icon: 'icon-arrow-right',
//         data: {
//           text: '右箭头',
//           rect: {
//             width: 200,
//             height: 100
//           },
//           name: 'rightArrow'
//         }
//       },
//       {
//         name: 'twowayArrow',
//         icon: 'icon-twoway-arrow',
//         data: {
//           text: '双向箭头',
//           rect: {
//             width: 200,
//             height: 100
//           },
//           name: 'twowayArrow'
//         }
//       },
//       {
//         name: 'line',
//         icon: 'icon-line',
//         data: {
//           text: '直线',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'line'
//         }
//       },
//       {
//         name: 'cloud',
//         icon: 'icon-cloud',
//         data: {
//           text: '云',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'cloud'
//         }
//       },
//       {
//         name: 'message',
//         icon: 'icon-msg',
//         data: {
//           text: '消息框',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           paddingLeft: 10,
//           paddingRight: 10,
//           paddingTop: 10,
//           paddingBottom: 10,
//           name: 'message'
//         }
//       },
//       {
//         name: 'file',
//         icon: 'icon-file',
//         data: {
//           text: '文档',
//           rect: {
//             width: 80,
//             height: 100
//           },
//           paddingLeft: 10,
//           paddingRight: 10,
//           paddingTop: 10,
//           paddingBottom: 10,
//           name: 'file'
//         }
//       },
//       {
//         name: 'text',
//         icon: 'icon-text',
//         data: {
//           text: 'le5le-topology / 乐吾乐',
//           rect: {
//             width: 160,
//             height: 30
//           },
//           name: 'text'
//         }
//       },
//       {
//         name: 'image',
//         icon: 'icon-image',
//         data: {
//           text: '',
//           rect: {
//             width: 100,
//             height: 100
//           },
//           name: 'image',
//           image: '/img/logo.png'
//         }
//       },
//       {
//         name: 'cube',
//         icon: 'icon-cube',
//         data: {
//           rect: {
//             width: 50,
//             height: 70
//           },
//           is3D: true,
//           z: 10,
//           zRotate: 15,
//           fillStyle: '#ddd',
//           name: 'cube',
//           icon: '\ue63c',
//           iconFamily: 'topology',
//           iconColor: '#777',
//           iconSize: 30
//         }
//       },
//       {
//         name: 'people',
//         icon: 'icon-people',
//         data: {
//           rect: {
//             width: 70,
//             height: 100
//           },
//           name: 'people'
//         }
//       },
//       {
//         name: '视频/网页',
//         icon: 'icon-pc',
//         data: {
//           text: '视频/网页',
//           rect: {
//             width: 200,
//             height: 200
//           },
//           paddingLeft: 10,
//           paddingRight: 10,
//           paddingTop: 10,
//           paddingBottom: 10,
//           // strokeStyle: 'transparent',
//           name: 'div'
//         }
//       }
//     ]
//   },
  {
    group: '流程图',
    children: [
      {
        name: '开始/结束',
        icon: 'icon-flow-start',
        data: {
          text: '开始',
          rect: {
            width: 120,
            height: 40
          },
          borderRadius: 0.5,
          name: 'rectangle'
        }
      },
      {
        name: '流程',
        icon: 'icon-rectangle',
        data: {
          text: '流程',
          rect: {
            width: 120,
            height: 40
          },
          name: 'rectangle'
        }
      },
      {
        name: '判定',
        icon: 'icon-diamond',
        data: {
          text: '判定',
          rect: {
            width: 120,
            height: 60
          },
          name: 'diamond'
        }
      },
      {
        name: '数据',
        icon: 'icon-flow-data',
        data: {
          text: '数据',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowData'
        }
      },
      {
        name: '准备',
        icon: 'icon-flow-ready',
        data: {
          text: '准备',
          rect: {
            width: 120,
            height: 50
          },
          name: 'hexagon'
        }
      },
      {
        name: '子流程',
        icon: 'icon-flow-subprocess',
        data: {
          text: '子流程',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowSubprocess'
        }
      },
      {
        name: '数据库',
        icon: 'icon-db',
        data: {
          text: '数据库',
          rect: {
            width: 80,
            height: 120
          },
          name: 'flowDb'
        }
      },
      {
        name: '文档',
        icon: 'icon-flow-document',
        data: {
          text: '文档',
          rect: {
            width: 120,
            height: 100
          },
          name: 'flowDocument'
        }
      },
      {
        name: '内部存储',
        icon: 'icon-internal-storage',
        data: {
          text: '内部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowInternalStorage'
        }
      },
      {
        name: '外部存储',
        icon: 'icon-extern-storage',
        data: {
          text: '外部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowExternStorage'
        }
      },
      {
        name: '队列',
        icon: 'icon-flow-queue',
        data: {
          text: '队列',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowQueue'
        }
      },
      {
        name: '手动输入',
        icon: 'icon-flow-manually',
        data: {
          text: '手动输入',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowManually'
        }
      },
      {
        name: '展示',
        icon: 'icon-flow-display',
        data: {
          text: '展示',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowDisplay'
        }
      },
      {
        name: '并行模式',
        icon: 'icon-flow-parallel',
        data: {
          text: '并行模式',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowParallel'
        }
      },
      {
        name: '注释',
        icon: 'icon-flow-comment',
        data: {
          text: '注释',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowComment'
        }
      }
    ]
  },
  {
    group: '活动图',
    children: [
      {
        name: '开始',
        icon: 'icon-inital',
        data: {
          text: '',
          rect: {
            width: 30,
            height: 30
          },
          name: 'circle',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      },
      {
        name: '结束',
        icon: 'icon-final',
        data: {
          text: '',
          rect: {
            width: 30,
            height: 30
          },
          name: 'activityFinal'
        }
      },
      {
        name: '活动',
        icon: 'icon-action',
        data: {
          text: '活动',
          rect: {
            width: 120,
            height: 50
          },
          borderRadius: 0.25,
          name: 'rectangle'
        }
      },
      {
        name: '决策/合并',
        icon: 'icon-diamond',
        data: {
          text: '决策',
          rect: {
            width: 120,
            height: 50
          },
          name: 'diamond'
        }
      },
      {
        name: '垂直泳道',
        icon: 'icon-swimlane-v',
        data: {
          text: '垂直泳道',
          rect: {
            width: 200,
            height: 500
          },
          name: 'swimlaneV'
        }
      },
      {
        name: '水平泳道',
        icon: 'icon-swimlane-h',
        data: {
          text: '水平泳道',
          rect: {
            width: 500,
            height: 200
          },
          name: 'swimlaneH'
        }
      },
      {
        name: '垂直分岔/汇合',
        icon: 'icon-fork-v',
        data: {
          text: '',
          rect: {
            width: 10,
            height: 150
          },
          name: 'forkV',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      },
      {
        name: '水平分岔/汇合',
        icon: 'icon-fork',
        data: {
          text: '',
          rect: {
            width: 150,
            height: 10
          },
          name: 'forkH',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      }
    ]
  },
  {
    group: '时序图和类图',
    children: [
      {
        name: '生命线',
        icon: 'icon-lifeline',
        data: {
          text: '生命线',
          rect: {
            width: 150,
            height: 400
          },
          name: 'lifeline'
        }
      },
      {
        name: '激活',
        icon: 'icon-focus',
        data: {
          text: '',
          rect: {
            width: 12,
            height: 200
          },
          name: 'sequenceFocus'
        }
      },
      {
        name: '简单类',
        icon: 'icon-simple-class',
        data: {
          text: 'Topolgoy',
          rect: {
            width: 270,
            height: 200
          },
          paddingTop: 40,
          font: {
            fontFamily: 'Arial',
            color: '#222',
            fontWeight: 'bold'
          },
          fillStyle: '#ffffba',
          strokeStyle: '#7e1212',
          name: 'simpleClass',
          children: [
            {
              text: '- name: string\n+ setName(name: string): void',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: 0,
                width: '100%',
                height: '100%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            }
          ]
        }
      },
      {
        name: '类',
        icon: 'icon-class',
        data: {
          text: 'Topolgoy',
          rect: {
            width: 270,
            height: 200
          },
          paddingTop: 40,
          font: {
            fontFamily: 'Arial',
            color: '#222',
            fontWeight: 'bold'
          },
          fillStyle: '#ffffba',
          strokeStyle: '#7e1212',
          name: 'interfaceClass',
          children: [
            {
              text: '- name: string',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: 0,
                width: '100%',
                height: '50%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            },
            {
              text: '+ setName(name: string): void',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: '50%',
                width: '100%',
                height: '50%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            }
          ]
        }
      }
    ]
  },
]
