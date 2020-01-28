import intent from '../models/Intent';
import dialog from '../models/Dialog';
import entity from '../models/Entity';

const imperium={
    CreateIntent:function (data) { intent.CreateIntent(data)},
    UpdateIntent:function (data) {intent.UpdateIntent(data)},
    DeleteIntent:function (data) {intent.DeleteIntent(data)},
    GetIntent:function (data) {intent.GetIntent(data)},
    ListIntent:function (data) {intent.ListIntent(data)},

    CreateDialog:function (data) { dialog.CreateDialog(data)},
    UpdateDialog:function (data) {dialog.UpdateDialog(data)},
    DeleteDialog:function (data) {dialog.DeleteDialog(data)},
    GetDialog:function (data) {dialog.GetDialog(data)},
    ListDialog:function (data) {dialog.ListDialog(data)},

    CreateEntity:function (data) { entity.CreateEntity(data)},
    UpdateEntity:function (data) {entity.UpdateEntity(data)},
    DeleteEntity:function (data) {entity.DeleteEntity(data)},
    GetEntity:function (data) {entity.GetEntity(data)},
    ListEntity:function (data) {entity.ListEntity(data)},
}
export default imperium;




