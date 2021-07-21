<template>
    <div>
        <Form ref="formInline"
              inline>
            <Form-item prop="user">
                <Input type="text"
                       v-model="coin"
                       placeholder="请输入币种">
                </Input>
            </Form-item>
            <Form-item>
                <Button type="primary"
                        @click="handleSearch">搜索</Button>
            </Form-item>
        </Form>
        <Table width="800"
               border
               :columns="columns"
               :data="data"
               style="margin:auto;"></Table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            columns: [
                {
                    title: '交易所',
                    key: 'exName',
                    fixed: 'left'
                },
                {
                    title: '币种',
                    key: 'coin',
                    fixed: 'left'
                },
                {
                    title: '充币',
                    key: 'despoit',
                },
                {
                    title: '提币',
                    key: 'withdraw',
                }
            ],
            data: [],
            copyData: [],
            coin: ''
        }
    },
    created () {
        this.handleLoad()
    },
    methods: {
        handleLoad () {
            const key = this.coin || 'key'
            this.$axios({
                method:'get',
                url:`/api/exs/v1/getCloseCoin?ex=okex&key=${key}`
            }).then((res) =>{          
                this.data = res.data
                this.copyData = res.data
            })
        },
        handleSearch () {
            if (!this.coin) {
                this.data = this.copyData
                return
            }
            const data = []
            this.copyData.forEach((item) =>{
                if (item.coin.toUpperCase() === this.coin.toUpperCase()) {
                    data.push(item)
                }
            })
            this.data = data
        }
    }
}
</script>
