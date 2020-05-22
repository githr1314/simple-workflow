<template>
	<div>
		<!-- 选中节点 -->
		<div>
			<div class="title">数据</div>
			<div class="items" v-if="props.node">
				<div class="flex grid">
					<div class="custom-data">
						自定义数据
					</div>
				</div>
				<div class="flex grid">
					<div :class="props.expand ? 'expand-data' : ''">
						<el-input type="textarea" v-model="nodeData" :rows="props.expand ? 15 : 3"
							@change="onChange" ></el-input>
					</div>
				</div>
			</div>
			<div class="items" v-if="props.line">
				<div class="flex grid">
					<div class="custom-data">
						选择逻辑
					</div>
				</div>
				<div class="flex grid">
					<el-radio-group v-model="nodeData" @change="onChange">
						<el-radio :label="'是'">是</el-radio>
						<el-radio :label="'否'">否</el-radio>
						<el-radio :label="'成功'">成功</el-radio>
						<el-radio :label="'失败'">失败</el-radio>
					</el-radio-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script >

export default {
	data() {
		return {
			nodeId: null,
			nodeIsJson: false,
			nodeData: ""
		};
	},
	props: {
		props: {
			type: Object,
			require: true
		}
	},
	updated() {
		if (this.props.node && this.nodeId !== this.props.node.id) {
			this.props.expand = false;
			this.nodeId = this.props.node.id;
			let originData = this.props.node.data;
			this.nodeIsJson = this.isJson(originData);
			this.nodeData = this.nodeIsJson ? JSON.stringify(originData, null, 4) : (this.nodeData = originData);
		}else if(this.props.line) {
			this.nodeData = this.props.line.text;
		}else {
			return;
		}
		
	},
	methods: {
		onChange(value) {
			if (this.props.node) {
				this.props.node.data = this.nodeIsJson ? JSON.parse(this.nodeData) : this.nodeData;
				this.$emit("change", this.props.node);
			}else if(this.props.line) {
				this.props.line.text = value;
				this.$emit("changeLine", this.props.line);
			}else {
				this.$emit("change", this.props.node);
			}
		},

		changeExpand() {
			this.props.expand = !this.props.expand;
		},

		isJson(obj) {
			return (
				typeof obj == "object" &&
				Object.prototype.toString.call(obj).toLowerCase() ==
				"[object object]" &&
				!obj.length
			);
		}
	}
};
</script>

<style lang="scss">
.star {
	display: block;
	color: #f60 !important;
	text-decoration: underline;
	margin-bottom: 0.1rem;
}

.title {
	color: #0d1a26;
	font-weight: 600;
	padding: 0.05rem 0.15rem;
	border-bottom: 1px solid #ccc;
}

.group {
	margin: 0.1rem 0 0.2rem 0.3rem;
	padding: 0;

	a,
	li {
		line-height: 2;
	}

	li {
		list-style: initial;
	}
	}

.bottom {
	position: absolute;
	bottom: 0.1rem;
}

.items {
  	padding: 5px 15px;

	.el-input-number {
		width: 102px;
		line-height: 32px;

		.el-input__inner {
			padding-left: 0;
			padding-right: 40px;
			height: 34px;
			line-height: 34px;
		}

		.el-input-number__increase {
			line-height: 16px;
		}
  	}

  	.custom-data i {
		cursor: pointer;
		float: right;
		color: #409eff;
		height: 20px;
		line-height: 20px;
  	}

	.expand-data {
		position: absolute;
		right: 0.15rem;
		width: 5rem;
	}
}

.formItem {
	margin-bottom: 0.1rem;
}
</style>
