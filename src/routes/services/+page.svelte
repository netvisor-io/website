<script lang="ts">
	import { ServiceCatalog, type ServiceDefinition } from '@netvisor/ui';

	// This will be loaded from fixture file generated during app build
	// TODO: Import from $lib/fixtures/services.json
	// For now, using a sample of services

	const services: ServiceDefinition[] = [
		{
			name: 'NetVisor Server API',
			category: 'Netvisor',
			description: 'NetVisor Server API for network management',
			discovery_pattern: 'Endpoint response body from <ip>:60072/api/health contains "netvisor"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/netvisor.png'
		},
		{
			name: 'Jellyfin',
			category: 'Media',
			description: 'Free software media system that lets you manage and stream your media',
			discovery_pattern: 'Endpoint response body from <ip>:8096/web/ contains "Jellyfin"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/jellyfin.svg'
		},
		{
			name: 'Plex',
			category: 'Media',
			description: 'Media server to organize and stream your personal media collection',
			discovery_pattern: 'Endpoint response body from <ip>:32400/web/ contains "Plex"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/plex.svg'
		},
		{
			name: 'Sonarr',
			category: 'Media',
			description: 'A TV collection manager for Usenet and BitTorrent users',
			discovery_pattern: 'Endpoint response body from <ip>:8989/Content/manifest.json contains "Sonarr"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/sonarr.svg'
		},
		{
			name: 'Radarr',
			category: 'Media',
			description: 'A movie collection manager for Usenet and BitTorrent users',
			discovery_pattern: 'Endpoint response body from <ip>:7878/Content/manifest.json contains "Radarr"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/radarr.svg'
		},
		{
			name: 'Prometheus',
			category: 'Monitoring',
			description: 'Open-source monitoring and alerting toolkit',
			discovery_pattern: 'Endpoint response body from <ip>:9090/ contains "Prometheus"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/prometheus.svg'
		},
		{
			name: 'Grafana',
			category: 'Monitoring',
			description: 'Multi-platform open source analytics and visualization platform',
			discovery_pattern: 'Endpoint response body from <ip>:3000/ contains "Grafana"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/grafana.svg'
		},
		{
			name: 'Docker',
			category: 'Virtualization',
			description: 'Platform for developing, shipping, and running applications in containers',
			discovery_pattern: 'Port 2375/tcp is open OR Port 2376/tcp is open',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg'
		},
		{
			name: 'Portainer',
			category: 'Virtualization',
			description: 'Container management UI for Docker, Kubernetes, and Swarm',
			discovery_pattern: 'Endpoint response body from <ip>:9000/ contains "Portainer"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/portainer.svg'
		},
		{
			name: 'Home Assistant',
			category: 'HomeAutomation',
			description: 'Open source home automation platform',
			discovery_pattern: 'Endpoint response body from <ip>:8123/ contains "Home Assistant"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/home-assistant.svg'
		},
		{
			name: 'Pi-hole',
			category: 'DNS',
			description: 'Network-wide ad blocking via your own Linux DNS sinkhole',
			discovery_pattern: 'Endpoint response body from <ip>/admin/ contains "Pi-hole"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/pi-hole.svg'
		},
		{
			name: 'Nginx',
			category: 'Web',
			description: 'High-performance web server and reverse proxy',
			discovery_pattern: 'HTTP response header contains "nginx"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nginx.svg'
		},
		{
			name: 'Traefik',
			category: 'ReverseProxy',
			description: 'Modern HTTP reverse proxy and load balancer',
			discovery_pattern: 'Endpoint response body from <ip>:8080/dashboard/ contains "Traefik"',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/traefik.svg'
		},
		{
			name: 'PostgreSQL',
			category: 'Database',
			description: 'Powerful, open source object-relational database system',
			discovery_pattern: 'Port 5432/tcp is open',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/postgresql.svg'
		},
		{
			name: 'MySQL',
			category: 'Database',
			description: 'Open-source relational database management system',
			discovery_pattern: 'Port 3306/tcp is open',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/mysql.svg'
		},
		{
			name: 'Redis',
			category: 'Database',
			description: 'In-memory data structure store and cache',
			discovery_pattern: 'Port 6379/tcp is open',
			logo_url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/redis.svg'
		}
	];
</script>

<svelte:head>
	<title>Supported Services - NetVisor</title>
	<meta name="description" content="NetVisor can automatically detect 100+ services including Docker, databases, media servers, and more." />
</svelte:head>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				Supported Services
			</h1>
			<p class="text-xl text-gray-400 max-w-2xl mx-auto">
				NetVisor automatically detects and identifies these services running on your network.
				More services are added regularly.
			</p>
		</div>

		<ServiceCatalog {services} showDiscoveryPatterns={true} />

		<div class="mt-16 text-center">
			<p class="text-gray-400 mb-4">
				Don't see a service you use? We're constantly adding more.
			</p>
			<a
				href="https://github.com/netvisor-io/netvisor/issues/new?template=service_request.md"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-secondary"
			>
				Request a Service
			</a>
		</div>
	</div>
</section>
