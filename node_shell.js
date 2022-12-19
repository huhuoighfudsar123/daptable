const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'21139e6c5ba84a3799917407127abb7c'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
