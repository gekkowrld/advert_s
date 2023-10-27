const currentUserInfo = {
	appCodeName: navigator.appCodeName,
	appName: navigator.appName,
	appMinorVersion: navigator.appMinorVersion,
	cpuClass: navigator.cpuClass,
	platform: navigator.platform,
	plugins: navigator.plugins,
	opsProfile: navigator.opsProfile,
	userProfile: navigator.userProfile,
	systemLanguage: navigator.systemLanguage,
	userLanguage: navigator.userLanguage,
	appVersion: navigator.appVersion,
	userAgent: navigator.userAgent,
	onLine: navigator.onLine
};

let user_info = document.querySelector(".user_details");

console.log(currentUserInfo);

// Manually write the variables to html

if (currentUserInfo.appCodeName){
	let para = document.createElement("p");
	para.innerText = `Browser Code Name: ${currentUserInfo.appCodeName}`;
	user_info.appendChild(para);
}

if (currentUserInfo.appName){
	let para = document.createElement("p");
	para.innerText = `Browser Name: ${currentUserInfo.appName}`;
	user_info.appendChild(para);
}

if (currentUserInfo.platform){
	let para = document.createElement("p");
	para.innerText = `Platform/OS: ${currentUserInfo.platform}`;
	user_info.appendChild(para);
}
if (currentUserInfo.appVersion){
	let para = document.createElement("p");
	para.innerText = `Browser Version: ${currentUserInfo.appVersion}`;
	user_info.appendChild(para);
}
if (currentUserInfo.userAgent){
	let para = document.createElement("p");
	para.innerText = `User Agent: ${currentUserInfo.userAgent}`;
	user_info.appendChild(para);
}
