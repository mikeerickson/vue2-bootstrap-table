import VueBootstrapTable from './VueBootstrapTable.vue';

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable,
    },
    data: {
        logging: [],
        showFilter: true,
        showPicker: true,
        paginated: true,
        multiColumnSortable: true,
        ajax: {
            enabled: true,
            url: "http://localhost:9430/data/test",
            method: "POST",
            delegate: true,
        },
        columns: [
            {
                title: "Id",
                name: "id",
            },
            {
                title: "Name",
                name: "title",
                visible: true,
                editable: true,
            }
        ],
        values: [
            {
                "id": 1,
                "title": "john",
            },
            {
                "id": 1,
                "title": "mary",
            },
            {
                "id": 1,
                "title": "jack",
            },
            {
                "id": 1,
                "title": "joe",
            },
            {
                "id": 2,
                "title": "ana",
            },
            {
                "id": 2,
                "title": "rita",
            },
            {
                "id": 2,
                "title": "mario",
            },
            {
                "id": 2,
                "title": "luigi",
            },
            {
                "id": 2,
                "title": "mickey",
            },
            {
                "id": 3,
                "title": "donald",
            },
            {
                "id": 3,
                "title": "juliet",
            }

        ]
    },
    created: function () {
        var self = this;
        this.$on('cellDataModifiedEvent',
            function( originalValue, newValue, columnTitle, entry) {
                self.logging.push("cellDataModifiedEvent - Original Value : " + originalValue +
                                         " | New Value : " + newValue +
                                         " | Column : " + columnTitle +
                                         " | Complete Entry : " +  entry );
            }
        );
        this.$on('ajaxLoadedEvent',
            function( data ) {
                this.logging.push("ajaxLoadedEvent - data : " + data );
            }
        );
        this.$on('ajaxLoadingError',
            function( error ) {
                this.logging.push("ajaxLoadingError - error : " + error );
            }
        );
    },
    methods: {
        addItem: function () {
            var self = this;
            var item = {
                "id": this.values.length + 1,
                "name": "name " + (this.values.length + 1)
            };
            this.values.push(item);
        },
        toggleFilter: function () {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function () {
            this.showPicker = !this.showPicker;
        },
        togglePagination: function () {
            this.paginated = !this.paginated;
        }
    },
});