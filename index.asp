<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "rechargle.com" or host = "www.rechargle.com" then
response.redirect("https://www.rechargle.com/")

else
response.redirect("https://www.rechargle.com/error.htm")
end if
%>