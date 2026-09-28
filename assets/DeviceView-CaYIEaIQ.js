import{i as e}from"./user-CqROs8oG.js";import{Dt as t,Nt as n,_t as r,dt as i,it as a,ot as o,t as s,ut as c}from"./QBtn-B3wUF7UR.js";import{i as l}from"./QMenu-Su_u3wkm.js";import{t as u}from"./composables-CGMvBNbk.js";import{t as d}from"./utils-CzrN-iCd.js";import{t as f}from"./ViewTable-BL2NlKa8.js";var p=Object.assign({name:`DeviceView`},{__name:`DeviceView`,setup(p){let{$api:m,$moment:h}=u(),{$dialog:g}=d(),_=a(()=>({title:`Device`,icon:`devices`,api:`/users/device`,rowKey:`id`,sort:{by:`created_at`,descending:!0},hideRefresh:!1,download:!0,columns:[{name:`user_id`,label:`User`,field:`user_id`,align:`left`},{name:`platform`,label:`Platform`,field:`platform`,align:`left`},{name:`created_at`,label:`Created At`,field:`created_at`,align:`left`,sortable:!0}]}));async function v(){try{await m.post({path:`/users/device/notification/test`}),e().success(`Test notification sent`)}catch(t){e().error(t?.response?.data?.message||t?.message||`Failed to send test notification`)}}async function y(t,n){try{switch(t){case`test`:await g.alert(`Device Details`,`
            <div class="q-gutter-y-sm">
              <div>
                <strong>ID:</strong> ${n.id}
              </div>
              <div>
                <strong>User ID:</strong> ${n.user_id}
              </div>
              <div>
                <strong>Platform:</strong> ${n.platform}
              </div>
              <div>
                <strong>Device:</strong> ${n.device_name||`-`}
              </div>
              <div>
                <strong>Token:</strong>
                <div style="word-break: break-all;">
                  ${n.token||`-`}
                </div>
              </div>
              <div>
                <strong>Created:</strong> ${h(n.created_at).format(`LLL`)||`-`}
              </div>
              <div>
                <strong>Updated:</strong> ${h(n.updated_at).format(`LLL`)||`-`}
              </div>
            </div>
          `);break;default:throw Error(`${t} not found`)}}catch(t){e().error(t.message)}}return(e,a)=>(t(),o(f,r({ref:`view`},_.value),{header:n(()=>[i(s,{class:`btn-action q-mx-md`,round:``,dense:``,color:`positive`,icon:`notifications`,onClick:v},{default:n(()=>[i(l,null,{default:n(()=>[...a[0]||=[c(`Test Notification`,-1)]]),_:1})]),_:1})]),action:n(({row:t})=>[i(s,{size:e.$q.screen.lt.sm?`md`:`sm`,color:`secondary`,flat:e.$q.screen.lt.sm,round:``,dense:``,icon:`visibility`,onClick:e=>y(`test`,t)},null,8,[`size`,`flat`,`onClick`])]),_:1},16))}});export{p as default};