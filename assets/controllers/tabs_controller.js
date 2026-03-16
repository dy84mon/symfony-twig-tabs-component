import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
    static targets = ['tab', 'panel']

    switch({ currentTarget }) {
        const label = currentTarget.dataset.label

        // Onglets
        this.tabTargets.forEach(tab => {
            const isActive = tab.dataset.label === label
            tab.classList.toggle('active', isActive)
            tab.setAttribute('aria-selected', isActive)
        })

        // Panneaux
        this.panelTargets.forEach(panel => {
            panel.classList.toggle('d-none', panel.dataset.label !== label)
        })
    }
}
