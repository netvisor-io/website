<script lang="ts">
	import '../app.css';
	import { GithubStars, NewsletterSignup } from '@netvisor/ui';
	import { Github, FileText, MessageCircle } from 'lucide-svelte';
	import { PUBLIC_PLUNK_API_KEY } from '$env/static/public';
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
		<div class="container mx-auto px-4 py-4">
			<nav class="flex items-center justify-between">
				<a href="/" class="flex items-center gap-2">
					<img src="/netvisor-logo.png" alt="NetVisor" class="h-8 w-8" />
					<span class="text-xl font-bold text-white">NetVisor</span>
				</a>

				<div class="flex items-center gap-6">
					<a href="/pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</a>
					<a
						href="https://docs.netvisor.io"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-white transition-colors"
					>
						Docs
					</a>
					<GithubStars usePublicApi={true} />
					<a href="https://app.netvisor.io" class="btn-primary">Get Started</a>
				</div>
			</nav>
		</div>
	</header>

	<!-- Main content -->
	<main class="flex-1">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-800 bg-gray-900/30">
		<div class="container mx-auto px-4 py-12">
			<div class="grid gap-8 md:grid-cols-4">
				<!-- Brand -->
				<div class="space-y-4">
					<div class="flex items-center gap-2">
						<img src="/netvisor-logo.png" alt="NetVisor" class="h-8 w-8" />
						<span class="text-xl font-bold text-white">NetVisor</span>
					</div>
					<p class="text-sm text-gray-400">
						Automatically discover and visually document network infrastructure.
					</p>
					<GithubStars usePublicApi={true} />
				</div>

				<!-- Product -->
				<div>
					<h4 class="font-semibold text-white mb-4">Product</h4>
					<ul class="space-y-2">
						<li><a href="/services" class="text-gray-400 hover:text-white text-sm">Supported Services</a></li>
						<li><a href="/pricing" class="text-gray-400 hover:text-white text-sm">Pricing</a></li>
						<li><a href="https://docs.netvisor.io" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white text-sm">Documentation</a></li>
					</ul>
				</div>

				<!-- Resources -->
				<div>
					<h4 class="font-semibold text-white mb-4">Resources</h4>
					<ul class="space-y-2">
						<li>
							<a href="https://github.com/netvisor-io/netvisor" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white text-sm flex items-center gap-2">
								<Github class="h-4 w-4" />
								GitHub
							</a>
						</li>
						<li>
							<a href="https://github.com/netvisor-io/netvisor/issues" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white text-sm flex items-center gap-2">
								<FileText class="h-4 w-4" />
								Issues
							</a>
						</li>
						<li>
							<a href="https://github.com/netvisor-io/netvisor/discussions" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white text-sm flex items-center gap-2">
								<MessageCircle class="h-4 w-4" />
								Discussions
							</a>
						</li>
					</ul>
				</div>

				<!-- Newsletter -->
				<div>
					<h4 class="font-semibold text-white mb-4">Stay Updated</h4>
					<NewsletterSignup apiKey={PUBLIC_PLUNK_API_KEY} eventName="website-newsletter" compact={true} />
				</div>
			</div>

			<div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-sm text-gray-500">
					© {new Date().getFullYear()} NetVisor
				</p>
				<div class="flex gap-6">
					<a href="/privacy" class="text-sm text-gray-500 hover:text-gray-400">Privacy</a>
					<a href="/terms" class="text-sm text-gray-500 hover:text-gray-400">Terms</a>
				</div>
			</div>
		</div>
	</footer>
</div>
