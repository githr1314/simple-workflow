<template>
	<div class="page">
		<div class="tools">
			<div v-for="(item, index) in tools" :key="index">
				<div class="title">{{ item.group }}</div>
				<div class="buttons">
					<a v-for="(btn, i) in item.children" :key="i" :title="btn.name" :draggable="btn.data" @dragstart="onDrag($event, btn)">
						<i :class="`iconfont ${btn.icon}`"></i>
						<span>{{btn.name}}</span>
					</a>
				</div>
			</div>
		</div>
		<div class="content" id="canvas"></div>
		<div class="props"  :style="props.expand ? 'overflow: visible' : ''">
      		<CanvasProps :props.sync="props" @change="onUpdateProps" @changeLine="onUpdateLineProps"></CanvasProps>
			<div style="display:flex;justify-content: space-around;margin: 20px 0;">
				<el-button type="primary" size="mini" @click="saveAsImage">导出为图片</el-button>
				<el-button type="primary" size="mini" @click="saveAsJson">导出为Json</el-button>
				<!-- <el-button type="primary" size="mini" @click="coypData">拷贝</el-button> -->
			</div>
		</div>
	</div>
</template>

<script>
import { Topology } from 'topology-core';
import { Tools, canvasRegister } from '@/server/canvas.js';
import CanvasProps from '../components/CanvasProps.vue'
import * as FileSaver from 'file-saver';
import data from './data.js'
export default {
components: {
	CanvasProps
},
data() {
	return {
		// 侧边栏工具
		tools: Tools,
		// 画布
		canvas: {},
		// 画布配置项
		canvasOptions: {},
		// 所选node的属性
		props: {
			node: null,
			line: null,
			nodes: null,
			multi: false,
			expand: false,
			locked: false
		}
	}
},
created() {
	canvasRegister();
},
mounted() {
	this.canvasOptions.on = this.onMessage
	this.canvas = new Topology('canvas', this.canvasOptions);
	this.coypData(JSON.stringify(data));
},
methods: {
	// 接收画布消息的回调函数
	onMessage : function(event, data){
		// 右侧输入框编辑状态时点击编辑区域其他元素，onMessage执行后才执行onUpdateProps方法，通过setTimeout让onUpdateProps先执行
		setTimeout(() => {
			switch (event) {
				case 'node':
				case 'addNode':
					this.props = {
						node: data,
						line: null,
						multi: false,
						expand: this.props.expand,
						nodes: null,
						locked: data.locked
					}
					break;
				case 'line':
				case 'addLine':
					this.props = {
						node: null,
						line: data,
						multi: false,
						nodes: null,
						locked: data.locked
					}
					break
				case 'multi':
					this.props = {
						node: null,
						line: null,
						multi: true,
						nodes: data.length > 1 ? data : null,
						locked: this.getLocked({ nodes: data })
					}
					break
				case 'space':
					this.props = {
						node: null,
						line: null,
						multi: false,
						nodes: null,
						locked: false
					}
					break
				case 'moveOut':
					break
				case 'moveNodes':
				case 'resizeNodes':
					if (data.length > 1) {
						this.props = {
							node: null,
							line: null,
							multi: true,
							nodes: data,
							locked: this.getLocked({ nodes: data })
						}
					} else {
						this.props = {
							node: data[0],
							line: null,
							multi: false,
							nodes: null,
							locked: false
						}
					}
					break
				case 'resize':
				case 'scale':
				// case 'locked':
				// 	if (this.canvas && this.canvas.data) {
				// 		this.$store.commit('canvas/data', {
				// 			scale: this.canvas.data.scale || 1,
				// 			lineName: this.canvas.data.lineName,
				// 			fromArrowType: this.canvas.data.fromArrowType,
				// 			toArrowType: this.canvas.data.toArrowType,
				// 			fromArrowlockedType: this.canvas.data.locked
				// 		})
				// 	}
				break
			}
		}, 0)
	},

	getLocked(data) {
		let locked = true
		if (data.nodes && data.nodes.length) {
			for (const item of data.nodes) {
				if (!item.locked) {
					locked = false
					break
				}
			}
		}
		if (locked && data.lines) {
			for (const item of data.lines) {
				if (!item.locked) {
					locked = false
					break
				}
			}
		}
		return locked
    },
	
	onDrag(event, node) {
    	event.dataTransfer.setData('Text', JSON.stringify(node.data));
	},
	
	saveAsImage : function() {
		this.canvas.saveAsImage('test', 'png');
	},

	saveAsJson : function() {
		console.log(JSON.stringify(this.canvas.data));
	},

	coypData : function (json) {
		this.canvas.open(json);
	},

	onUpdateProps(node) {
		// 如果是node属性改变，需要传入node，重新计算node相关属性值
		this.canvas.updateProps(node)
	},
	
	onUpdateLineProps(line) {
		// 如果是line属性改变，无需传参
		this.canvas.updateProps();
	}

}

}
</script>
<style lang="scss" scoped>
.page {
	display: flex;
  	width: 100%;
	height: 100%;
	
	.tools {
		flex-shrink: 0;
		width: 175px;
		background-color: #f8f8f8;
		border-right: 1px solid #d9d9d9;
		overflow-y: auto;

		.title {
			color: #0d1a26;
			font-weight: 600;
			font-size: 12px;
			line-height: 1;
			padding: 5px 10px;
			margin-top: 8px;
			border-bottom: 1px solid #ddd;

			&:first-child {
				border-top: none;
				}
		}

		.buttons {
			padding: 10px 0;
			display: flex;
			flex-wrap: wrap;

			a {
				padding: 10px 0;
				display: flex;
				flex-direction: column;
				color: #314659;
				width: 33.3%;
				text-align: center;
				text-decoration: none !important;
				cursor: pointer;

				.iconfont {
					font-size: 20px;
				}

				&:hover {
					color: #1890ff;
				}

				span {
					font-size: 12px;
				}
			}
		}
	}

	.content {
		flex: 1;
		width: initial;
		position: relative;
		overflow: auto;
		background: #fff;
	}

	.props {
		flex-shrink: 0;
		width: 240px;
		padding: 10px 0;
		background-color: #f8f8f8;
		border-left: 1px solid #d9d9d9;
		overflow-y: auto;
		position: relative;
	}
	
}
</style>