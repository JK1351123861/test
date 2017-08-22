<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Account.aspx.vb" Inherits="WeChat_Account" EnableViewState="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>
    <title>账号明细情况</title>
    <link href= "CssStyle/Account.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
      <div class="tab-card">
      	<div id="lift-card">
      		<asp:RadioButton ID="rbClinicAcc" runat="server" 
              Checked="true" GroupName="AccType" Text="门诊账户" />
      	</div>
		<div id="right-card">
			<asp:RadioButton ID="rbHospitalAcc" runat="server"  
              Checked="false" GroupName="AccType" Text="住院账户" />
		</div>
	</div>
	<div class="blue-block">
		<div class="circle-rectangle">
			<table cellpadding="0" class="table-size" runat="server" id="tblSummary">
              <tr id="Tr1" runat="server">
                  <th id="_SumRHC0" runat="server"  >范围</th>
                  <th id="_SumRHC1" runat="server"  >账户余额</th>
                  <th id="_SumRHC2" runat="server"  >可用余额</th>
              </tr>
              <tr id="Tr2" runat="server" >
                 <td>
                     <asp:Label ID="_SumR0C0" runat="Server"  Text ="账户" />
                 </td>
                 <td>
                     <asp:Label ID="_SumR0C1" runat="Server" CssClass="number"/>
                 </td>
                 <td>
                     <asp:Label ID="_SumR0C2" runat="Server"  CssClass="number" />
                 </td>
              </tr>
              <tr id="Tr3"  runat="server">
                 <td>
                     <asp:Label ID="_SumR1C0" runat="Server"  Text ="线上" />
                 </td>
                 <td>
                     <asp:Label ID="_SumR1C1" runat="Server"  CssClass="number" />
                 </td>
                 <td>
                     <asp:Label ID="_SumR1C2" runat="Server"  CssClass="number" />
                 </td>
              </tr>
              <tr id="Tr4"  runat="server" >
                 <td>
                     <asp:Label ID="_SumR2C0" runat="Server"  Text ="线下" />
                 </td>
                 <td>
                     <asp:Label ID="_SumR2C1" runat="Server"  CssClass="number" />
                 </td>
                 <td>
                     <asp:Label ID="_SumR2C2" runat="Server"  CssClass="number" />
                 </td>
              </tr>
          </table>
		</div>
	</div>
	<div class="particuars-button-block">
    	    <asp:DropDownList ID ="ddlDateRange" runat="server" CssClass="lift-time">
                <asp:ListItem Selected="True" Value="30">30天内</asp:ListItem>
                <asp:ListItem Value="60">60天内</asp:ListItem>
                <asp:ListItem Value="90">90天内</asp:ListItem>
                <asp:ListItem Value="300">今年</asp:ListItem>
                <asp:ListItem Value="400">去年</asp:ListItem>
            </asp:DropDownList>
		<asp:Button ID="bMoreDetails" runat="server" Text="点击查询" CssClass="Button" />
	</div>
	<div class="history-list">
		<asp:ListView  ID="dlAccDetail" runat="server" >
            <LayoutTemplate>
                <table cellpadding="0" width="100%" border="0" runat="server" id="tblDetail">         
                    <tr runat="server" id="itemPlaceholder"/>
                </table>
            </LayoutTemplate>
          <ItemTemplate>
                <tr id="Tr5" runat="server">
                    <td>
                        <asp:Label ID="ItemTime" runat="Server" Text='<%#Eval("BusTime") %>' CssClass="font-style-data" />
                    </td>
                    <td valign="top">
                        <asp:Label ID="ItemMessage" runat="Server" Text='<%#Eval("BusDetail") %>' CssClass="font-style-thing" />
                    </td>
                </tr>
            </ItemTemplate>
        </asp:ListView>
	</div>
	<div class="bottom-button">
		<a class="lift-button" href="http://service.stejs.com/wechat/recharge.aspx">
			充值
		</a>
		<a class="right-button" href="http://service.stejs.com/wechat/discharge.aspx">
			退款
		</a>
	</div>
    </form>
<script type="text/javascript">
window.onload = function ()
{

	//tab选项卡切换功能
	var guding = document.getElementById ('lift-card');
	var gudings = document.getElementById ('right-card');
	guding.onclick =  function(){
		this.style.borderBottom = '5px solid #ff8e01';
		this.style.color = '#30ada0';
		gudings.style.borderBottom ='0px';
		gudings.style.color = '#cecece';
	}
	gudings.onclick =  function(){
		this.style.borderBottom = '5px solid #ff8e01 ';
		this.style.color = '#30ada0 ';
		guding.style.borderBottom ='0px';
		guding.style.color = '#cecece';
	}
}
</script>
</body>
</html>
