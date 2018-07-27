<template>
    <v-card>
        <v-card-title>
        Orders
        </v-card-title>
        <v-data-table
            :items="orders"
            class="elevation-1"
            hide-actions
            hide-headers>
            <template slot="items" slot-scope="props">
            <td>{{ props.item.orderNr }}</td>
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.price }}</td>
            <td class="text-xs-right">{{ props.item.allergenic }}</td>
            <td class="text-xs-right">        
                <v-btn flat icon @click="removeOrder(props.item.id)">
                <v-icon>fa-trash</v-icon>
                </v-btn>
            </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import Orders from './orders';
export default Orders;
</script>

<style>
</style>
