/*
@license
dhtmlxScheduler v.4.3.1 

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
scheduler.form_blocks.combo = {
    render: function(e) {
        e.cached_options || (e.cached_options = {});
        var t = "";
        return t += "<div class='" + e.type + "' style='height:" + (e.height || 20) + "px;' ></div>"
    },
    set_value: function(e, t, a, i) {
        ! function() {
            function t() {
                if (e._combo && e._combo.DOMParent) {
                    var t = e._combo;
                    t.unload ? t.unload() : t.destructor && t.destructor(), t.DOMParent = t.DOMelem = null
                }
            }
            t();
            var a = scheduler.attachEvent("onAfterLightbox", function() {
                t(), scheduler.detachEvent(a)
            })
        }(), window.dhx_globalImgPath = i.image_path || "/", e._combo = new dhtmlXCombo(e, i.name, e.offsetWidth - 8),
            i.onchange && e._combo.attachEvent("onChange", i.onchange), i.options_height && e._combo.setOptionHeight(i.options_height);
        var n = e._combo;
        if (n.enableFilteringMode(i.filtering, i.script_path || null, !!i.cache), i.script_path) {
            var r = a[i.map_to];
            r ? i.cached_options[r] ? (n.addOption(r, i.cached_options[r]), n.disable(1), n.selectOption(0), n.disable(0)) : dhtmlxAjax.get(i.script_path + "?id=" + r + "&uid=" + scheduler.uid(), function(e) {
                var t = e.doXPath("//option")[0],
                    a = t.childNodes[0].nodeValue;
                i.cached_options[r] = a, n.addOption(r, a),
                    n.disable(1), n.selectOption(0), n.disable(0)
            }) : n.setComboValue("")
        } else {
            for (var l = [], d = 0; d < i.options.length; d++) {
                var o = i.options[d],
                    s = [o.key, o.label, o.css];
                l.push(s)
            }
            if (n.addOption(l), a[i.map_to]) {
                var _ = n.getIndexByValue(a[i.map_to]);
                n.selectOption(_)
            }
        }
    },
    get_value: function(e, t, a) {
        var i = e._combo.getSelectedValue();
        return a.script_path && (a.cached_options[i] = e._combo.getSelectedText()), i
    },
    focus: function(e) {}
}, scheduler.form_blocks.radio = {
    render: function(e) {
        var t = "";
        t += "<div class='dhx_cal_ltext dhx_cal_radio' style='height:" + e.height + "px;' >";

        for (var a = 0; a < e.options.length; a++) {
            var i = scheduler.uid();
            t += "<input id='" + i + "' type='radio' name='" + e.name + "' value='" + e.options[a].key + "'><label for='" + i + "'> " + e.options[a].label + "</label>", e.vertical && (t += "<br/>")
        }
        return t += "</div>"
    },
    set_value: function(e, t, a, i) {
        for (var n = e.getElementsByTagName("input"), r = 0; r < n.length; r++) {
            n[r].checked = !1;
            var l = a[i.map_to] || t;
            n[r].value == l && (n[r].checked = !0)
        }
    },
    get_value: function(e, t, a) {
        for (var i = e.getElementsByTagName("input"), n = 0; n < i.length; n++)
            if (i[n].checked) return i[n].value;

    },
    focus: function(e) {}
}, scheduler.form_blocks.checkbox = {
    render: function(e) {
        return scheduler.config.wide_form ? '<div class="dhx_cal_wide_checkbox" ' + (e.height ? "style='height:" + e.height + "px;'" : "") + "></div>" : ""
    },
    set_value: function(e, t, a, i) {
        e = document.getElementById(i.id);
        var n = scheduler.uid(),
            r = "undefined" != typeof i.checked_value ? t == i.checked_value : !!t;
        e.className += " dhx_cal_checkbox";
        var l = "<input id='" + n + "' type='checkbox' value='true' name='" + i.name + "'" + (r ? "checked='true'" : "") + "'>",
            d = "<label for='" + n + "'>" + (scheduler.locale.labels["section_" + i.name] || i.name) + "</label>";

        if (scheduler.config.wide_form ? (e.innerHTML = d, e.nextSibling.innerHTML = l) : e.innerHTML = l + d, i.handler) {
            var o = e.getElementsByTagName("input")[0];
            o.onclick = i.handler
        }
    },
    get_value: function(e, t, a) {
        e = document.getElementById(a.id);
        var i = e.getElementsByTagName("input")[0];
        return i || (i = e.nextSibling.getElementsByTagName("input")[0]), i.checked ? a.checked_value || !0 : a.unchecked_value || !1
    },
    focus: function(e) {}
};
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_editors.js.map
