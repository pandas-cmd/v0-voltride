<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack leaf routes for public content and the root shell for shared navigation/footer so every content page has distinct metadata.
- Keep shared VoltRide presentation in src/components/voltride and client-safe content/schema in src/lib so branding and validation remain consistent.
- Store enquiries in the private fleet_enquiries table through a validated, insert-only public server function; expose only a receipt reference to prevent visitor access to private leads.
- Serve uploaded media through imported Lovable asset pointers and retain a small real favicon in public so media does not inflate source deliveries.
- Use semantic styles and reduced-motion-aware transitions in src/styles.css so interaction and responsive behavior remain consistent.
