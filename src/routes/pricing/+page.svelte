<script lang="ts">
	import { BillingPlanForm, type BillingPlan, type TypeMetadata, type BillingPlanMetadata, type FeatureMetadata } from '@netvisor/ui';

	// These will be loaded from fixture files generated during app build
	// For now, using placeholder data structure
	// TODO: Import from $lib/fixtures/plans.json and $lib/fixtures/metadata.json

	const plans: BillingPlan[] = [
		{
			base_cents: 0,
			seat_cents: null,
			included_seats: 1,
			network_cents: null,
			included_networks: 1,
			rate: 'Month',
			trial_days: 0,
			type: 'Community'
		},
		{
			base_cents: 900,
			seat_cents: null,
			included_seats: 1,
			network_cents: null,
			included_networks: 3,
			rate: 'Month',
			trial_days: 14,
			type: 'Starter'
		},
		{
			base_cents: 2900,
			seat_cents: 500,
			included_seats: 3,
			network_cents: 200,
			included_networks: 10,
			rate: 'Month',
			trial_days: 14,
			type: 'Pro'
		}
	];

	const billingPlansMetadata: TypeMetadata<BillingPlanMetadata>[] = [
		{
			id: 'Community',
			name: 'Community',
			description: 'Perfect for personal projects and homelab enthusiasts.',
			category: 'personal',
			icon: 'Heart',
			color: 'green',
			metadata: {
				features: {
					api_access: false,
					audit_logs: false,
					share_views: false,
					onboarding_call: false,
					dedicated_support_channel: false,
					commercial_license: false,
					remove_created_with: false
				},
				is_commercial: false
			}
		},
		{
			id: 'Starter',
			name: 'Starter',
			description: 'For individuals who need more power.',
			category: 'personal',
			icon: 'Rocket',
			color: 'blue',
			metadata: {
				features: {
					api_access: true,
					audit_logs: false,
					share_views: true,
					onboarding_call: false,
					dedicated_support_channel: false,
					commercial_license: false,
					remove_created_with: false
				},
				is_commercial: false
			}
		},
		{
			id: 'Pro',
			name: 'Pro',
			description: 'For professionals and small teams.',
			category: 'commercial',
			icon: 'Briefcase',
			color: 'purple',
			metadata: {
				features: {
					api_access: true,
					audit_logs: true,
					share_views: true,
					onboarding_call: false,
					dedicated_support_channel: false,
					commercial_license: true,
					remove_created_with: true
				},
				is_commercial: true
			}
		}
	];

	const featuresMetadata: TypeMetadata<FeatureMetadata>[] = [
		{
			id: 'api_access',
			name: 'API Access',
			description: 'Programmatic access to your network data.',
			category: 'Features',
			icon: 'Code',
			color: 'blue',
			metadata: { use_null_as_unlimited: false, is_coming_soon: false }
		},
		{
			id: 'audit_logs',
			name: 'Audit Logs',
			description: 'Track all changes and access.',
			category: 'Features',
			icon: 'FileText',
			color: 'gray',
			metadata: { use_null_as_unlimited: false, is_coming_soon: false }
		},
		{
			id: 'share_views',
			name: 'Shareable Views',
			description: 'Share read-only views with others.',
			category: 'Features',
			icon: 'Share2',
			color: 'green',
			metadata: { use_null_as_unlimited: false, is_coming_soon: false }
		},
		{
			id: 'commercial_license',
			name: 'Commercial License',
			description: 'Use NetVisor for commercial purposes.',
			category: 'License',
			icon: 'Building',
			color: 'purple',
			metadata: { use_null_as_unlimited: false, is_coming_soon: false }
		},
		{
			id: 'remove_created_with',
			name: 'Remove Branding',
			description: 'Remove "Created with NetVisor" from exports.',
			category: 'Features',
			icon: 'EyeOff',
			color: 'gray',
			metadata: { use_null_as_unlimited: false, is_coming_soon: false }
		}
	];

	function handlePlanSelect(plan: BillingPlan) {
		// Redirect to the app's checkout flow
		window.location.href = `https://app.netvisor.io/billing?plan=${plan.type}`;
	}
</script>

<svelte:head>
	<title>Pricing - NetVisor</title>
	<meta name="description" content="NetVisor pricing plans. Free for personal use, with affordable plans for teams and businesses." />
</svelte:head>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				Simple, Transparent Pricing
			</h1>
			<p class="text-xl text-gray-400 max-w-2xl mx-auto">
				Start free, scale as you grow. All plans include core features.
			</p>
		</div>

		<BillingPlanForm
			{plans}
			{billingPlansMetadata}
			{featuresMetadata}
			onPlanSelect={handlePlanSelect}
			showGithubStars={true}
			usePublicGithubApi={true}
		/>
	</div>
</section>
